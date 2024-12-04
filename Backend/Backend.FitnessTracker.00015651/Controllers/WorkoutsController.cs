using Backend.FitnessTracker._00015651.Data;
using Backend.FitnessTracker._00015651.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.FitnessTracker._00015651.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkoutsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public WorkoutsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Workouts
        [HttpGet]
        public IActionResult GetWorkouts()
        {
            return Ok(_context.Workouts.ToList());
        }

        // GET: api/Workouts/{id}
        [HttpGet("{id}")]
        public IActionResult GetWorkoutById(int id)
        {
            var workout = _context.Workouts.Find(id);
            if (workout == null)
            {
                return NotFound();
            }
            return Ok(workout);
        }

        // POST: api/Workouts
        [HttpPost]
        public IActionResult CreateWorkout([FromBody] Workout workout)
        {
            if (workout == null)
            {
                return BadRequest("Workout data is invalid.");
            }

            _context.Workouts.Add(workout);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetWorkoutById), new { id = workout.WorkoutId }, workout);
        }

        // PUT: api/Workouts/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateWorkout(int id, [FromBody] Workout updatedWorkout)
        {
            var workout = _context.Workouts.Find(id);
            if (workout == null)
            {
                return NotFound();
            }

            workout.Date = updatedWorkout.Date;
            workout.Type = updatedWorkout.Type;
            workout.Duration = updatedWorkout.Duration;
            workout.CaloriesBurned = updatedWorkout.CaloriesBurned;
            workout.UserId = updatedWorkout.UserId;

            _context.SaveChanges();
            return NoContent();
        }

        // DELETE: api/Workouts/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteWorkout(int id)
        {
            var workout = _context.Workouts.Find(id);
            if (workout == null)
            {
                return NotFound();
            }

            _context.Workouts.Remove(workout);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
