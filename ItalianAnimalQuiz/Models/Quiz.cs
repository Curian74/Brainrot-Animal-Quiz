namespace ItalianAnimalQuiz.Models
{
    public class Quiz
    {
        public int Id { get; set; }
        public DateTime CreateAt { get; set; } = DateTime.Now;
        public DateTime EndAt
        {
            get { return CreateAt.AddSeconds(DurationInSeconds); }
            set { CreateAt = value; }
        }

        public double DurationInSeconds { get; set; }
        public bool IsFinished { get; set; }
        public bool IsPassed { get; set; }
        public TimeSpan? TimeTaken { get; set; }
        public double Score { get; set; }

        public IList<Question>? Questions { get; set; }
    }
}
