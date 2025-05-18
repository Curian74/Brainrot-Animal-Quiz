using ItalianAnimalQuiz.Data;
using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Interfaces;
using ItalianAnimalQuiz.Mappers;
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

        public async Task<AnimalDto> CreateAnimalAsync(CreateAnimalDto dto)
        {
            if (dto.Answers == null || !dto.Answers.Any())
            {
                throw new ArgumentException("Must provide answers for the question.");
            }

            var animal = new Animal
            {
                Title = "",
                ImageUrl = dto.ImageUrl,
                Answers = dto.Answers.Select(a => new Answer
                {
                    Title = a.Title,
                    IsCorrect = a.IsCorrect,
                })
                .ToList()
            };

            await _context.Animals.AddAsync(animal);
            await _context.SaveChangesAsync();

            return animal.ToDto();
        }

        public async Task<PagedResult<AnimalDto>> GetAllAsync(AnimalQuery query)
        {
            var animals = _context.Animals.Include(a => a.Answers).AsQueryable();

            var animalDto = animals.Select(x => x.ToDto());

            var skip = (query.PageIndex - 1) * query.PageSize;

            var pagedData = await animalDto.Skip(skip).Take(query.PageSize).ToListAsync();
            var totalCount = await animalDto.CountAsync();

            return new PagedResult<AnimalDto>(pagedData, query.PageIndex, query.PageSize, totalCount);
        }

        public async Task<IEnumerable<AnimalDto>> GetAllByQuizIdAsync(int quizId)
        {

            var quiz = await _context.Quizzes.FirstOrDefaultAsync(x => x.Id == quizId);

            if (quiz == null)
            {
                throw new KeyNotFoundException("Quiz not found.");
            }

            var animals = await _context.Animals
                .Include(a => a.Quizzes)
                .Where(a => a.Quizzes.Contains(quiz))
                .ToListAsync();

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
