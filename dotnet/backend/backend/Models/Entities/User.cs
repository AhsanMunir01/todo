using System.ComponentModel.DataAnnotations;

namespace backend.Models.Entities
{
    public class User
    {
        public int Id { get; set; }
        
        [Required]
        [MinLength(2)]
        public required string FirstName { get; set; }
        
        [Required]
        [MinLength(2)]
        public required string LastName { get; set; }
        
        [Required]
        [EmailAddress]
        public required string Email { get; set; }
        
        [Required]
        public required string PasswordHash { get; set; }
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public DateTime? LastLoginAt { get; set; }
        
        // Navigation property for user's todos
        public ICollection<Todo> Todos { get; set; } = new List<Todo>();
    }
}