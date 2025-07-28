using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class RegisterDto
    {
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
        [MinLength(8)]
        public required string Password { get; set; }
        
        [Required]
        [Compare("Password", ErrorMessage = "Passwords do not match")]
        public required string ConfirmPassword { get; set; }
    }
}