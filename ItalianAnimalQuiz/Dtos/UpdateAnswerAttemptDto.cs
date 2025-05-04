using ItalianAnimalQuiz.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace ItalianAnimalQuiz.Dtos
{
    public class UpdateAnswerAttemptDto
    {
        public int Id { get; set; }

        public int? AnswerId { get; set; }

        public bool IsMarked { get; set; } = false;

        public int QuizAttemptId { get; set; }
    }
}
