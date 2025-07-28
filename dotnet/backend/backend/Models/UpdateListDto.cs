namespace backend.Models
{
    public class UpdateListDto
    {
        public required string Title { get; set; } = string.Empty;
        public required string Description { get; set; } = string.Empty;
        public bool IsCompleted { get; set; } = false;
        public required string Priority { get; set; } = "Medium";
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? CompletedAt { get; set; } = null;
        public UpdateListDto() { }
        public UpdateListDto(string title)
        {
            Title = title;
        }
    }
}
