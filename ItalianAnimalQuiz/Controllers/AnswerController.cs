using ItalianAnimalQuiz.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ItalianAnimalQuiz.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        private readonly IAnswerRepository _answerRepository;

        public AnswerController(IAnswerRepository answerRepository)
        {
            _answerRepository = answerRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetByAnimalId(int animalId)
        {
            return Ok(await _answerRepository.GetAnswersByAnimalId(animalId));
        }
    }
}
