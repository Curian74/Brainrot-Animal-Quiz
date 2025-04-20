namespace ItalianAnimalQuiz.Dtos
{
    public class CreateQuizDto
    {
        public double DurationInSeconds { get; set; }
        public bool IsFinished { get; set; } = false;
        public double Score { get; set; } = 0;
        public bool IsPassed { get; set; } = false;
    }
}
