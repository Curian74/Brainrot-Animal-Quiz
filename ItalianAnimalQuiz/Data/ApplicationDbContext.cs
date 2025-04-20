using ItalianAnimalQuiz.Models;
using Microsoft.EntityFrameworkCore;

namespace ItalianAnimalQuiz.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<QuizAttempt> QuizAttempts { get; set; }
        public DbSet<AnswerAttempt> AnswerAttempts { get; set; }
    }
}
