using System.ComponentModel.DataAnnotations.Schema;

namespace ItalianAnimalQuiz.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public bool IsCorrect { get; set; }

        [ForeignKey(nameof(Animal))]
        public int AnimalId { get; set; }
        public Animal? Animal { get; set; }
    }
}
