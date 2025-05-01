using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Models;
using ItalianAnimalQuiz.Queries;
using ItalianAnimalQuiz.Utils;

namespace ItalianAnimalQuiz.Interfaces
{
    public interface IAnimalRepository
    {
        Task<PagedResult<AnimalDto>> GetAllAsync(AnimalQuery query);
    }
}
