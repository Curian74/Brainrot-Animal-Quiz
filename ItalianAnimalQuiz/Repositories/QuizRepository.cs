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

        public async Task<QuizDto> CreateQuizAsync(CreateQuizDto dto)
        {
            var quiz = dto.ToQuizFromCreateDto();

            //Check if the number of question matches the actual input Id count.
            if (dto.NumberOfQuestions != dto.AnimalsIds.Count())
            {
                throw new ArgumentException("Number of questions mismatch.");
            }

            var animals = await _context.Animals
                .Where(a => dto.AnimalsIds.Contains(a.Id))
                .ToListAsync();

            // Check if some Ids of animals dont exist.
            // This also prevents the duplication of animals per quiz.
            if (animals.Count != dto.AnimalsIds.Count)
            {
                throw new ArgumentException("Failed to create new quiz. Invalid animal Ids input.");
            }

            quiz.Animals = animals;

            await _context.Quizzes.AddAsync(quiz);
            await _context.SaveChangesAsync();

            return quiz.ToDtoFromEntity();
        }

        public async Task<IEnumerable<Quiz>> GetAllQuizAsync()
        {
            var quizzes = await _context.Quizzes.ToListAsync();

            return quizzes;
        }
    }
}
