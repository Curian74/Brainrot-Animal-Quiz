using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Models;
using ItalianAnimalQuiz.Queries;
using ItalianAnimalQuiz.Utils;

namespace ItalianAnimalQuiz.Interfaces
{
    public interface IQuizRepository
    {
        Task<QuizDto> CreateQuizAsync(CreateQuizDto dto);
        Task<IEnumerable<Quiz>> GetAllQuizAsync();
        Task<PagedResult<QuizDto>> GetPagedAsync(QuizQuery quizQuery);
    }
}
