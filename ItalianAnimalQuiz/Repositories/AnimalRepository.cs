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
            var animals = await _context.Animals.Include(a => a.Answers).ToListAsync();
            var animalDto = animals.Select(x => x.ToDto());

            var skip = (query.PageIndex - 1) * query.PageSize;

            var pagedData = animalDto.Skip(skip).Take(query.PageSize);

            return new PagedResult<AnimalDto>(pagedData, query.PageIndex, query.PageSize, animalDto.Count());
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
