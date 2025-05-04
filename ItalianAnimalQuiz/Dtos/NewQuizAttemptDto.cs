using ItalianAnimalQuiz.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace ItalianAnimalQuiz.Dtos
{
    public class NewQuizAttemptDto
    {
        public int? QuizId { get; set; }
    }
}
