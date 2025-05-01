using ItalianAnimalQuiz.Models;
using ItalianAnimalQuiz.Queries;
using ItalianAnimalQuiz.Utils;

namespace ItalianAnimalQuiz.Interfaces
{
    public interface IAnimalRepository
    {
        Task<PagedResult<Animal>> GetAllAsync(AnimalQuery query);
    }
}
