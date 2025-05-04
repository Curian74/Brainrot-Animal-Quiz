using ItalianAnimalQuiz.Data;
using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Interfaces;
using ItalianAnimalQuiz.Mappers;
using Microsoft.EntityFrameworkCore;

namespace ItalianAnimalQuiz.Repositories
{
    public class AnswerRepository : IAnswerRepository
    {
        private readonly ApplicationDbContext _context;

        public AnswerRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<AnswerDto>> GetAnswersByAnimalId(int animalId)
        {
            var answers = await _context.Answers.Where(x => x.AnimalId == animalId).ToListAsync();

            var dtoEntities = answers.Select(x => x.ToDto());

            return dtoEntities.ToList();
        }
    }
}
