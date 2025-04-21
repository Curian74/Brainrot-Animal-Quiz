using System.ComponentModel.DataAnnotations;

namespace ItalianAnimalQuiz.Dtos
{
    public class CreateQuizDto
    {
        [Range(1, int.MaxValue)]
        public double DurationInMinutes { get; set; }
        [Range(1, int.MaxValue)]
        public int NumberOfQuestions { get; set; }
    }
}
