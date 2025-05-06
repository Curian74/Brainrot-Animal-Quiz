using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Interfaces;
using ItalianAnimalQuiz.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace ItalianAnimalQuiz.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class QuizAttemptController : ControllerBase
    {
        private readonly IQuizAttemptRepository _quizAttemptRepository;

        public QuizAttemptController(IQuizAttemptRepository quizAttemptRepository)
        {
            _quizAttemptRepository = quizAttemptRepository;
        }

        [HttpPost]
        public async Task<IActionResult> NewQuizAttempt(NewQuizAttemptDto dto)
        {
            try
            {
                var quiz = await _quizAttemptRepository.CreateQuizAttemptAsync(dto);

                return Ok(quiz);
            }

            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
        [HttpGet]
        public async Task<IActionResult> AttemptById([FromQuery] int attemptId)
        {
            try
            {
                var quizAttempt = await _quizAttemptRepository.GetQuizAttemptByIdAsync(attemptId);

                if (quizAttempt == null)
                {
                    return NotFound();
                }

                return Ok(quizAttempt);
            }

            catch (KeyNotFoundException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> SubmitQuizAttempt([FromBody] SubmitQuizAttemptDto dto)
        {
            try
            {
                QuizAttemptDto quiz = await _quizAttemptRepository.SubmitQuizAttemptAsync(dto);

                return Ok(quiz);
            }

            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
