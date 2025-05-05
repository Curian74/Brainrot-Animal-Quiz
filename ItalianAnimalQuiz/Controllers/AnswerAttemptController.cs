using ItalianAnimalQuiz.Dtos;
using ItalianAnimalQuiz.Interfaces;
using ItalianAnimalQuiz.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ItalianAnimalQuiz.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AnswerAttemptController : ControllerBase
    {
        private readonly IAnswerAttemptRepository _answerAttemptRepository;

        public AnswerAttemptController(IAnswerAttemptRepository answerAttemptRepository)
        {
            _answerAttemptRepository = answerAttemptRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetById([FromQuery] int id)
        {
            try
            {
                var ansAttempt = await _answerAttemptRepository.GetByIdAsync(id);

                return Ok(ansAttempt);
            }

            catch (KeyNotFoundException ex)
            {
                return BadRequest(ex.Message);
            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetByAttemptId([FromQuery] int id)
        {
            try
            {
                var ansAttempt = await _answerAttemptRepository.GetByQuizAttemptIdAsync(id);

                return Ok(ansAttempt);
            }

            catch (KeyNotFoundException ex)
            {
                return BadRequest(ex.Message);
            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAnswerAttempt([FromBody] UpdateAnswerAttemptDto dto)
        {
            try
            {
                await _answerAttemptRepository.UpdateAnswerAttempt(dto);

                return Ok("Success!");
            }

            catch (KeyNotFoundException ex)
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
