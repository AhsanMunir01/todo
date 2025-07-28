using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class AddToListDto
    {
        [Required]
        public int UserId { get; set; }
        
        public required string Title { get; set; } = string.Empty;
        public required string Description { get; set; } = string.Empty;
        public bool IsCompleted { get; set; } = false;
        public required string Priority { get; set; } = "Medium";
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? CompletedAt { get; set; } = null;
        
        public AddToListDto() { }
        public AddToListDto(string title)
        {
            Title = title;
        }
    }
}
