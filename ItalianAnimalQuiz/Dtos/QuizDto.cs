using ItalianAnimalQuiz.Models;

namespace ItalianAnimalQuiz.Dtos
{
    public class QuizDto
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public double DurationInMinutes { get; set; }
        public int NumberOfQuestions { get; set; }
    }
}
