namespace ItalianAnimalQuiz.Dtos
{
    public class CreateAnimalDto
    {
        public string? Title { get; set; }
        public string? ImageUrl { get; set; }
        public List<AnswerListDto>? Answers { get; set; }
    }

    public class AnswerListDto
    {
        public string? Title { get; set; }
        public bool IsCorrect { get; set; }
    }
}
