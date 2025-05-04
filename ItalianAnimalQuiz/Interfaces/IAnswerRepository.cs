using ItalianAnimalQuiz.Dtos;

namespace ItalianAnimalQuiz.Interfaces
{
    public interface IAnswerRepository
    {
        Task<List<AnswerDto>> GetAnswersByAnimalId(int animalId);
    }
}
