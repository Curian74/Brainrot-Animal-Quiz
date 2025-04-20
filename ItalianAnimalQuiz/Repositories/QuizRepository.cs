using ItalianAnimalQuiz.Data;
using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Interfaces;
using ItalianAnimalQuiz.Mappers;
using ItalianAnimalQuiz.Models;
using Microsoft.EntityFrameworkCore;

namespace ItalianAnimalQuiz.Repositories
{
    public class QuizRepository : IQuizRepository
    {
        private readonly ApplicationDbContext _context;

        public QuizRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Quiz> CreateQuizAsync(CreateQuizDto dto)
        {
            var quiz = dto.ToQuizFromCreateDto();

            await _context.Quizzes.AddAsync(quiz);
            await _context.SaveChangesAsync();

            return quiz;
        }

        public async Task<IEnumerable<Quiz>> GetAllQuizAsync()
        {
            var quizzes = await _context.Quizzes.ToListAsync();

            return quizzes;
        }
    }
}
