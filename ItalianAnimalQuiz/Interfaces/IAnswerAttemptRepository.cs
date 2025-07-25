﻿using ItalianAnimalQuiz.Dtos;

namespace ItalianAnimalQuiz.Interfaces
{
    public interface IAnswerAttemptRepository
    {
        Task UpdateAnswerAttempt(UpdateAnswerAttemptDto dto);
        Task <AnswerAttemptDto> GetByIdAsync(int id);
        Task <IEnumerable<AnswerAttemptDto>> GetByQuizAttemptIdAsync(int id);
    }
}
