using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Models;

namespace ItalianAnimalQuiz.Mappers
{
    public static class QuizAttemptMapper
    {
        public static QuizAttemptDto ToDtoFromEntity(this QuizAttempt entity)
        {
            return new QuizAttemptDto
            {
                CreateAt = entity.CreateAt,
                EndAt = entity.EndAt,
                Id = entity.Id,
                IsFinished = entity.IsFinished,
                IsPassed = entity.IsPassed,
                QuizId = entity.QuizId,
                Score = entity.Score,
                TimeTakenInSeconds = entity.TimeTakenInSeconds
            };
        }
    }
}
