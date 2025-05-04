namespace ItalianAnimalQuiz.Dtos
{
    public class AnswerAttemptDto
    {
        public int Id { get; set; }
        public int? AnswerId { get; set; }
        public bool IsMarked { get; set; }
    }
}
