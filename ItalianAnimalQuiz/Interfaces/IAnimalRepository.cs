using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Queries;
using ItalianAnimalQuiz.Utils;

namespace ItalianAnimalQuiz.Interfaces
{
    public interface IAnimalRepository
    {
        Task<PagedResult<AnimalDto>> GetAllAsync(AnimalQuery query);
        Task<AnimalDto> GetByIdAsync(int animalId);
    }
}
