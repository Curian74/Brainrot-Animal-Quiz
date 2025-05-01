namespace ItalianAnimalQuiz.Dtos
{
    public class AnimalDto
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? ImageUrl { get; set; }
        public string? AudioSource { get; set; }

        public IList<AnswerDto>? Answers { get; set; }
    }
}
