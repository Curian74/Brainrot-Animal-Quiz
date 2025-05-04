using ItalianAnimalQuiz.Data;
using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Interfaces;
using ItalianAnimalQuiz.Mappers;
using ItalianAnimalQuiz.Queries;
using ItalianAnimalQuiz.Utils;
using Microsoft.EntityFrameworkCore;

namespace ItalianAnimalQuiz.Repositories
{
    public class AnimalRepository : IAnimalRepository
    {
        private readonly ApplicationDbContext _context;

        public AnimalRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<PagedResult<AnimalDto>> GetAllAsync(AnimalQuery query)
        {
            var animals = _context.Animals.AsQueryable();

            if (query.QuizId.HasValue)
            {
                animals = animals.Where(a => a.Quizzes!.Any(q => q.Id == query.QuizId.Value));
            }

            var animalDto = animals.Select(x => x.ToDto());

            var skip = (query.PageIndex - 1) * query.PageSize;

            var pagedData = await animalDto.Skip(skip).Take(query.PageSize).ToListAsync();
            var totalCount = await animalDto.CountAsync();

            return new PagedResult<AnimalDto>(pagedData, query.PageIndex, query.PageSize, totalCount);
        }

        public async Task<IEnumerable<AnimalDto>> GetAllByQuizIdAsync(int quizId)
        {
            var animals = await _context.Animals.ToListAsync();

            var dtoEntities = animals.Select(a => a.ToDto());

            return dtoEntities;
        }

        public async Task<AnimalDto> GetByIdAsync(int animalId)
        {
            var animal = await _context.Animals.FirstOrDefaultAsync(x => x.Id == animalId);

            if (animal == null)
            {
                throw new KeyNotFoundException("Animal not found.");
            }

            return animal.ToDto();
        }
    }
}
