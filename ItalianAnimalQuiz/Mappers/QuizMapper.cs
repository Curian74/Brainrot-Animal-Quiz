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
                DurationInMinutes = dto.DurationInMinutes,
                NumberOfQuestions = dto.NumberOfQuestions,
                Name = dto.Name,
            };
        }

        public static QuizDto ToDtoFromEntity(this Quiz quiz)
        {
            return new QuizDto
            {
                DurationInMinutes = quiz.DurationInMinutes,
                Name = quiz.Name,
                NumberOfQuestions = quiz.NumberOfQuestions,
            };
        }
    }
}
