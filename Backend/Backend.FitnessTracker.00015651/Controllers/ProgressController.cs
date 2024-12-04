using Backend.FitnessTracker._00015651.Data;
using Backend.FitnessTracker._00015651.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.FitnessTracker._00015651.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProgressController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProgressController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAllProgress()
        {
            return Ok(_context.Progress.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetProgressById(int id)
        {
            var progress = _context.Progress.Find(id);
            if (progress == null)
            {
                return NotFound();
            }
            return Ok(progress);
        }

        [HttpPost]
        public IActionResult CreateProgress([FromBody] Progress progress)
        {
            _context.Progress.Add(progress);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetProgressById), new { id = progress.ProgressId }, progress);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProgress(int id, [FromBody] Progress updatedProgress)
        {
            var progress = _context.Progress.Find(id);
            if (progress == null)
            {
                return NotFound();
            }

            progress.Steps = updatedProgress.Steps;
            progress.CaloriesConsumed = updatedProgress.CaloriesConsumed;
            progress.Date = updatedProgress.Date;
            progress.Description = updatedProgress.Description;

            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProgress(int id)
        {
            var progress = _context.Progress.Find(id);
            if (progress == null)
            {
                return NotFound();
            }

            _context.Progress.Remove(progress);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
