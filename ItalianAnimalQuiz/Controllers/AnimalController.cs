using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Interfaces;
using ItalianAnimalQuiz.Queries;
using Microsoft.AspNetCore.Mvc;

namespace ItalianAnimalQuiz.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AnimalController : ControllerBase
    {
        private readonly IAnimalRepository _animalRepository;

        public AnimalController(IAnimalRepository animalRepository)
        {
            _animalRepository = animalRepository; 
        }

        [HttpGet]
        public async Task<IActionResult> GetById([FromQuery] int animalId)
        {
            return Ok(await _animalRepository.GetByIdAsync(animalId));
        }

        [HttpGet]
        public async Task<IActionResult> GetAllByQuizId([FromQuery] int quizId)
        {
            return Ok(await _animalRepository.GetAllByQuizIdAsync(quizId));
        }

        [HttpGet]   
        public async Task<IActionResult> GetPaged([FromQuery] AnimalQuery animalQuery)
        {
            return Ok(await _animalRepository.GetAllAsync(animalQuery));
        }

        [HttpPost]
        public async Task<IActionResult> CreateAnimal([FromBody] CreateAnimalDto dto)
        {
            try
            {
                var data = await _animalRepository.CreateAnimalAsync(dto);

                return Ok(data);
            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
