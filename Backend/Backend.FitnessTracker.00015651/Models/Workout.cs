using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.FitnessTracker._00015651.Models
{
    public class Workout
    {
        [Key]
        public int WorkoutId { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        [MaxLength(50)]
        public string Type { get; set; }

        [Range(0, int.MaxValue)]
        public int Duration { get; set; }

        [Range(0, int.MaxValue)]
        public int CaloriesBurned { get; set; }

        // Navigation property (JsonIgnore added to prevent circular references)
        [JsonIgnore]
        public User? User { get; set; }
    }
}
