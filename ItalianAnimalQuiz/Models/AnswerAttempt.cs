using System.ComponentModel.DataAnnotations.Schema;

namespace ItalianAnimalQuiz.Models
{
    public class AnswerAttempt
    {
        public int Id { get; set; }

        [ForeignKey(nameof(Answer))]
        public int? AnswerId { get; set; }
        public Answer? Answer { get; set; }

        public bool IsMarked { get; set; }

        [ForeignKey(nameof(QuizAttempt))]
        public int QuizAttemptId { get; set; }
        public QuizAttempt? QuizAttempt { get; set; }


    }
}
