using ItalianAnimalQuiz.Data;
using ItalianAnimalQuiz.Interfaces;
using ItalianAnimalQuiz.Models;
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

        public async Task<PagedResult<Animal>> GetAllAsync(AnimalQuery query)
        {
            var animals = await _context.Animals.ToListAsync();

            var skip = (query.PageIndex - 1) * query.PageSize;

            var pagination = animals.Skip(skip).Take(query.PageSize);

            return new PagedResult<Animal>(pagination, query.PageIndex, query.PageSize, animals.Count());
        }
    }
}
