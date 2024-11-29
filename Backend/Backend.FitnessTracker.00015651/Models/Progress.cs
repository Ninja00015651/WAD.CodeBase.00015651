namespace Backend.FitnessTracker._00015651.Models;

public class Progress
{
    public int ProgressId { get; set; }
    public int UserId { get; set; }
    public DateTime Date { get; set; }
    public int Steps { get; set; }
    public int CaloriesConsumed { get; set; }

    public User User { get; set; }
}
