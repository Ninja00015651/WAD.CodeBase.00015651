using Microsoft.EntityFrameworkCore;
using Backend.FitnessTracker._00015651.Models;

namespace Backend.FitnessTracker._00015651.Data 
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Workout> Workouts { get; set; }
        public DbSet<Progress> Progress { get; set; }
    }
}
//ID00015651