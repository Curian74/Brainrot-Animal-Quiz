namespace ItalianAnimalQuiz.Models
{
    public class Quiz
    {
        public int Id { get; set; }
        public double DurationInMinutes { get; set; }
        public int NumberOfQuestions { get; set; }
        public IList<Question>? Questions { get; set; }
    }
}
