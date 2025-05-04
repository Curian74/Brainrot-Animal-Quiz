using ItalianAnimalQuiz.Models;

namespace ItalianAnimalQuiz.Dtos
{
    public class QuizAttemptDto
    {
        public int Id { get; set; }
        public DateTime CreateAt { get; set; } = DateTime.Now;
        public DateTime EndAt { get; set; }
        public double? TimeTakenInSeconds { get; set; }

        public bool IsFinished { get; set; }
        public bool IsPassed { get; set; }
        public double Score { get; set; }

        public int? QuizId { get; set; }
        public List<AnswerAttemptDto>? AnswerAttempts { get; set; }
    }
}
