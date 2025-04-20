using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Models;

namespace ItalianAnimalQuiz.Interfaces
{
    public interface IQuizRepository
    {
        Task<Quiz> CreateQuizAsync(CreateQuizDto dto);
        Task<IEnumerable<Quiz>> GetAllQuizAsync();
    }
}
