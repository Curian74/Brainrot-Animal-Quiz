using ItalianAnimalQuiz.Enums;

namespace ItalianAnimalQuiz.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public QuestionTypeEnum QuestionType { get; set; }
        public string? AudioSource { get; set; }

        public IList<Answer>? CorrectAnswers { get; set; }
        public IList<Quiz>? Quizzes { get; set; }
    }
}
