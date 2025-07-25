﻿using ItalianAnimalQuiz.Models;
using System.ComponentModel.DataAnnotations;

namespace ItalianAnimalQuiz.Dtos
{
    public class CreateQuizDto
    {
        [Required]
        public string? Name { get; set; }
        public double DurationInMinutes { get; set; }
        [Range(1, int.MaxValue)]
        public int NumberOfQuestions { get; set; }

        public List<int>? AnimalsIds { get; set; }
    }
}
