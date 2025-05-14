using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Models;

namespace ItalianAnimalQuiz.Mappers
{
    public static class AnimalMapper
    {
        public static AnimalDto ToDto(this Animal animal)
        {
            return new AnimalDto
            {
                Id = animal.Id,
                AudioSource = animal.AudioSource,
                ImageUrl = animal.ImageUrl,
                Title = animal.Title,
                Answers = animal.Answers?.Select(x => x.ToDto()).ToList(),
            };
        }

        public static Animal ToEntityFromCreateDto(this CreateAnimalDto dto)
        {
            return new Animal
            {
                ImageUrl = dto.ImageUrl,
                Title = dto.Title,
            };
        }
    }
}
