using System.ComponentModel.DataAnnotations.Schema;

namespace ItalianAnimalQuiz.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public string? Title { get; set; }

        [ForeignKey(nameof(Question))]
        public int QuestionId { get; set; }
        public Animal? Question { get; set; }
    }
}
