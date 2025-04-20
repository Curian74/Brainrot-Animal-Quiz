namespace ItalianAnimalQuiz.Models
{
    public class Quiz
    {
        public int Id { get; set; }
        public double DurationInSeconds { get; set; }
        public IList<Question>? Questions { get; set; }
    }
}
