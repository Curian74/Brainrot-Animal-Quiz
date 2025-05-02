using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ItalianAnimalQuiz.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class QuizController : ControllerBase
    {
        private readonly IQuizRepository _quizRepository;

        public QuizController(IQuizRepository quizRepository)
        {
            _quizRepository = quizRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _quizRepository.GetAllQuizAsync());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateQuizDto quizDto)
        {
            try
            {
                var result = await _quizRepository.CreateQuizAsync(quizDto);

                return Ok(result);
            }

            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
