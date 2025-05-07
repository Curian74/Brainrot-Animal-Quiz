namespace ItalianAnimalQuiz.Dtos
{
    public class AnswerAttemptDto
    {
        public int Id { get; set; }
        public int? AnswerId { get; set; }
        public bool IsMarked { get; set; }
        public int QuizAttemptId { get; set; }
        public int AnimalId { get; set; }
    }
}
