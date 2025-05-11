using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Models;

namespace ItalianAnimalQuiz.Interfaces
{
    public interface IQuizAttemptRepository
    {
        Task<QuizAttempt> CreateQuizAttemptAsync(NewQuizAttemptDto newQuizAttemptDto);
        Task<QuizAttemptDto> GetQuizAttemptByIdAsync(int attemptId, int quizId, bool isFinished);
        Task<QuizAttemptDto> SubmitQuizAttemptAsync(SubmitQuizAttemptDto dto);
    }
}
