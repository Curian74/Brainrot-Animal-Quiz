namespace ItalianAnimalQuiz.Models
{
    public class Animal
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? ImageUrl { get; set; }
        public string? AudioSource { get; set; }

        public IList<Answer>? CorrectAnswers { get; set; }
        public IList<Quiz>? Quizzes { get; set; }
    }
}
