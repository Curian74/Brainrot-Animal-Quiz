using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Models;

namespace ItalianAnimalQuiz.Mappers
{
    public static class AnswerAttemptMapper
    {
        public static AnswerAttemptDto ToDtoFromEntity(this AnswerAttempt answerAttempt)
        {
            return new AnswerAttemptDto
            {
                AnswerId = answerAttempt.AnswerId,
                Id = answerAttempt.Id,
                IsMarked = answerAttempt.IsMarked,
                QuizAttemptId = answerAttempt.QuizAttemptId,
                AnimalId = answerAttempt.AnimalId,
            };
        }
    }
}
