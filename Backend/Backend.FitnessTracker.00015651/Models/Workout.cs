namespace Backend.FitnessTracker._00015651.Models;

public class Workout
{
    public int WorkoutId { get; set; }
    public int UserId { get; set; }
    public DateTime Date { get; set; }
    public string Type { get; set; }
    public int Duration { get; set; }
    public int CaloriesBurned { get; set; }

    public User User { get; set; }
}
