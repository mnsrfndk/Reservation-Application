using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Models
{
    public class Facility
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(100)]
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        public string? ImageUrl { get; set; }
        public bool isAvailable { get; set; }
        public List<Instrument>? Instruments { get; set; }
    }
}
