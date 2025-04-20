namespace ItalianAnimalQuiz.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public string? Title { get; set; }

        public IList<Question>? Questions { get; set; }
    }
}
