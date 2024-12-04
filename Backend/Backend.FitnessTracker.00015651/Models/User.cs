using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Backend.FitnessTracker._00015651.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        // Initialize navigation properties to prevent null references
        public ICollection<Progress> Progress { get; set; } = new List<Progress>();
        public ICollection<Workout> Workouts { get; set; } = new List<Workout>();
    }
}
