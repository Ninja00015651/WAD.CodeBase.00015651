using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.FitnessTracker._00015651.Models
{
    public class Progress
    {
        [Key]
        public int ProgressId { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Range(0, int.MaxValue)]
        public int Steps { get; set; }

        [Range(0, int.MaxValue)]
        public int CaloriesConsumed { get; set; }

        [MaxLength(500)]
        public string Description { get; set; } // Description property

        // Navigation property (JsonIgnore added to prevent circular references)
        [JsonIgnore]
        public User? User { get; set; }
    }
}
