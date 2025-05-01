using System.ComponentModel.DataAnnotations.Schema;

namespace ItalianAnimalQuiz.Models
{
    public class QuizAttempt
    {
        public int Id { get; set; }
        public DateTime CreateAt { get; set; } = DateTime.Now;
        public DateTime EndAt { get; set; }
        public double? TimeTakenInSeconds { get; set; }

        public bool IsFinished { get; set; }
        public bool IsPassed { get; set; }
        public double Score { get; set; }

        [ForeignKey("Quiz")]
        public int? QuizId { get; set; }
        public Quiz? Quiz { get; set; }

        public IList<AnswerAttempt>? AnswerAttempts { get; set; }

    }
}
