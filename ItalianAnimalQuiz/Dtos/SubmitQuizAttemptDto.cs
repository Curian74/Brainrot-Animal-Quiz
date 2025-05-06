namespace ItalianAnimalQuiz.Dtos
{
    public class SubmitQuizAttemptDto
    {
        public int Id { get; set; }
        public double? TimeTakenInSeconds { get; set; }
        public double Score { get; set; }
    }
}
