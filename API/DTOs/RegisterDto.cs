using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
    // This required is here so we get email errors
    [Required]
    public string Email { get; set; }
    public required string Password { get; set; }
}
