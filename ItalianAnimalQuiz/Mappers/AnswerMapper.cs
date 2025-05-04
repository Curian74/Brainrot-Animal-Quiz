using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Models;

namespace ItalianAnimalQuiz.Mappers
{
    public static class AnswerMapper
    {
        public static AnswerDto ToDto(this Answer answer)
        {
            return new AnswerDto
            {
                IsCorrect = answer.IsCorrect,
                Title = answer.Title,
                Id = answer.Id,
            };
        }
    }
}
