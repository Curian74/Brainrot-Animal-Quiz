using ItalianAnimalQuiz.Data;
using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Interfaces;
using ItalianAnimalQuiz.Mappers;
using ItalianAnimalQuiz.Models;
using Microsoft.EntityFrameworkCore;

namespace ItalianAnimalQuiz.Repositories
{
    public class AnswerAttemptRepository : IAnswerAttemptRepository
    {
        private readonly ApplicationDbContext _context;

        public AnswerAttemptRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<AnswerAttemptDto> GetByIdAsync(int id)
        {
            var answerAttempt = await _context.AnswerAttempts
                .FirstOrDefaultAsync(a => a.Id == id)
                ?? throw new KeyNotFoundException("Not found.");

            return answerAttempt.ToDtoFromEntity();
        }

        public async Task<IEnumerable<AnswerAttemptDto>> GetByQuizAttemptIdAsync(int id)
        {
            var ansAttempts = await _context.AnswerAttempts.Where(a => a.QuizAttemptId == id).ToListAsync();

            var dtoEntities = ansAttempts.Select(a => a.ToDtoFromEntity());

            return dtoEntities;
        }

        public async Task UpdateAnswerAttempt(UpdateAnswerAttemptDto dto)
        {
            var answerAttempt = await _context.AnswerAttempts
                .FirstOrDefaultAsync(a => a.Id == dto.Id);

            if (answerAttempt == null)
            {
                var newAnswerAttempt = new AnswerAttempt
                {
                    QuizAttemptId = dto.QuizAttemptId,
                    AnswerId = dto.AnswerId,
                    IsMarked = dto.IsMarked,
                };

                await _context.AnswerAttempts.AddAsync(newAnswerAttempt);
                await _context.SaveChangesAsync();

                return;
            }

            //answerAttempt.QuizAttemptId = dto.QuizAttemptId;
            //answerAttempt.AnswerId = dto.AnswerId;
            //answerAttempt.IsMarked = dto.IsMarked;

            _context.Remove(answerAttempt);
            await _context.SaveChangesAsync();
        }

    }
}
