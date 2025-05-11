using ItalianAnimalQuiz.Data;
using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Interfaces;
using ItalianAnimalQuiz.Mappers;
using ItalianAnimalQuiz.Models;
using Microsoft.EntityFrameworkCore;

namespace ItalianAnimalQuiz.Repositories
{
    public class QuizAttemptRepository : IQuizAttemptRepository
    {
        private readonly ApplicationDbContext _context;

        public QuizAttemptRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<QuizAttempt> CreateQuizAttemptAsync(NewQuizAttemptDto newQuizAttemptDto)
        {
            var quiz = await _context.Quizzes
                .FirstOrDefaultAsync(x => x.Id == newQuizAttemptDto.QuizId)
                ?? throw new KeyNotFoundException("Quiz not found.");

            var quizAttempt = new QuizAttempt
            {
                QuizId = newQuizAttemptDto.QuizId,
                CreateAt = DateTime.Now,
                EndAt = DateTime.Now.AddMinutes(quiz.DurationInMinutes),
                IsFinished = false,
                IsPassed = false,
                Score = 0,
                SubmittedAt = null,
                TimeTakenInSeconds = null,
            };

            await _context.QuizAttempts.AddAsync(quizAttempt);
            await _context.SaveChangesAsync();

            return quizAttempt;
        }

        public async Task<QuizAttemptDto> GetQuizAttemptByIdAsync(int attemptId, int quizId, bool isFinished)
        {
            var quizAttempt = await _context.QuizAttempts
                .Include(q => q.AnswerAttempts)
                .FirstOrDefaultAsync(x => x.Id == attemptId && x.QuizId == quizId && x.IsFinished == isFinished)
                ?? throw new KeyNotFoundException("Quiz attempt not found.");

            var dtoEntity = quizAttempt.ToDtoFromEntity();

            dtoEntity.AnswerAttempts = await _context.AnswerAttempts
                .Where(x => x.QuizAttemptId == attemptId)
                .Select(x => new AnswerAttemptDto
                {
                    Id = x.Id,
                    AnswerId = x.AnswerId,
                    IsMarked = x.IsMarked,
                    QuizAttemptId = x.QuizAttemptId,
                    AnimalId = x.AnimalId,
                }).ToListAsync();

            return dtoEntity;
        }

        public async Task<QuizAttemptDto> SubmitQuizAttemptAsync(SubmitQuizAttemptDto dto)
        {
            var quizAttempt = await _context.QuizAttempts
                .Include(q => q.AnswerAttempts)!
                    .ThenInclude(aa => aa.Answer)!
                .FirstOrDefaultAsync(a => a.Id == dto.Id)
                ?? throw new KeyNotFoundException("Quiz attempt not found.");

            var quiz = await _context.Quizzes
                .Include(q => q.Animals)!
                    .ThenInclude(a => a.Answers)!
                .FirstOrDefaultAsync(x => x.Id == quizAttempt.QuizId)
                ?? throw new KeyNotFoundException("Quiz not found.");

            // Group user selected answers by questionId
            var groupedAttempts = quizAttempt.AnswerAttempts!
                .Where(at => at.Answer != null)
                .GroupBy(at => at.AnimalId)
                .ToDictionary(g => g.Key, g => g.Select(at => at.Answer!).ToList());

            int score = 0;

            foreach (var animal in quiz.Animals!)
            {
                if (!groupedAttempts.TryGetValue(animal.Id, out var userAnswers))
                {
                    // User didnt answer this question
                    continue;
                }

                var correctAnswers = animal.Answers!.Where(a => a.IsCorrect).ToList();

                if (userAnswers.Count == correctAnswers.Count &&
                    !userAnswers.Except(correctAnswers).Any())
                {
                    score++;
                }
            }

            quizAttempt.Score = score;
            quizAttempt.IsFinished = true;
            quizAttempt.SubmittedAt = DateTime.Now;
            quizAttempt.TimeTakenInSeconds = 
                (quizAttempt.SubmittedAt.Value - quizAttempt.CreateAt).TotalSeconds;
            quizAttempt.IsPassed = score >= (quiz.Animals.Count / 2.0);

            await _context.SaveChangesAsync();

            return quizAttempt.ToDtoFromEntity();
        }

    }
}
