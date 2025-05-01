using ItalianAnimalQuiz.Interfaces;
using ItalianAnimalQuiz.Queries;
using ItalianAnimalQuiz.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace ItalianAnimalQuiz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimalController : ControllerBase
    {
        private readonly IAnimalRepository _animalRepository;

        public AnimalController(IAnimalRepository animalRepository)
        {
            _animalRepository = animalRepository; 
        }

        [HttpGet]   
        public async Task<IActionResult> GetPaged([FromQuery] AnimalQuery animalQuery)
        {
            return Ok(await _animalRepository.GetAllAsync(animalQuery));
        }
    }
}
