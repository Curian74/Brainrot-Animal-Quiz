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
                TimeTakenInSeconds = null,
            };

            await _context.QuizAttempts.AddAsync(quizAttempt);
            await _context.SaveChangesAsync();

            return quizAttempt;
        }

        public async Task<QuizAttemptDto> GetQuizAttemptByIdAsync(int attemptId)
        {
            var quizAttempt = await _context.QuizAttempts
                .Include(q => q.AnswerAttempts)
                .FirstOrDefaultAsync(x => x.Id == attemptId);

            var dtoEntity = quizAttempt.ToDtoFromEntity();

            dtoEntity.AnswerAttempts = await _context.AnswerAttempts.Select(x => new AnswerAttemptDto
            {
                Id = x.Id,
                AnswerId = x.AnswerId,
                IsMarked = x.IsMarked,
            }).ToListAsync();

            return dtoEntity ?? throw new KeyNotFoundException("Quiz attempt not found.");
        }
    }
}
