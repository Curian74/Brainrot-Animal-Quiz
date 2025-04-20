using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Models;

namespace ItalianAnimalQuiz.Mappers
{
    public static class QuizMapper
    {
        public static Quiz ToQuizFromCreateDto(this CreateQuizDto dto)
        {
            return new Quiz
            {
                DurationInSeconds = dto.DurationInSeconds,
                IsFinished = dto.IsFinished,
                IsPassed = dto.IsPassed,
                Score = dto.Score,
            };
        }
    }
}
