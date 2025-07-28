using System.ComponentModel.DataAnnotations;

namespace backend.Models.Entities
{
    public class Todo
    {
        public int Id { get; set; }
        
        [Required]
        public int UserId { get; set; }
        
        public required string Title { get; set; } = string.Empty;
        public required string Description { get; set; } = string.Empty; 
        public bool IsCompleted { get; set; } = false;
        public required string priority { get; set; } = "Medium";
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? CompletedAt { get; set; } = null;
        
        // Navigation property
        public User User { get; set; } = null!;
        
        public Todo() { }
        public Todo(string title)
        {
            Title = title;
        }
    }
}