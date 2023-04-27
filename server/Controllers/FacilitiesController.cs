using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication2.Data;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class FacilitiesController : ControllerBase
    {

        private readonly WebApplication2Context _context;

        public FacilitiesController(WebApplication2Context context)
        {
            _context = context;
        }

        // GET: api/Facilities
        [HttpGet]
        public IEnumerable<Facility> GetFacility(string searchText = "")
        {
            if (_context.Facility == null)
            {
                return (IEnumerable<Facility>)NotFound();
            }
            return _context.Facility.Include(s => s.Instruments).Where(f => f.Name.Contains(searchText)).ToList();
        }

        // GET: api/Facilities/5
        [HttpGet("{id}")]
        public ActionResult<Facility> GetFacility(int id)
        {
            if (_context.Facility == null)
            {
                return NotFound();
            }
            var facility = _context.Facility.Include(s => s.Instruments).FirstOrDefault(s => s.Id == id);

            if (facility == null)
            {
                return NotFound();
            }

            return facility;
        }

        // PUT: api/Facilities/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFacility(int id, Facility facility)
        {
            if (id != facility.Id)
            {
                return BadRequest();
            }

            _context.Entry(facility).State = EntityState.Modified;

            // Iterate over each Instrument object and set the state to Modified
            foreach (var instrument in facility.Instruments)
            {
                _context.Entry(instrument).State = EntityState.Modified;
            }

            try
            {

                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FacilityExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Facilities
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Facility>> PostFacility(Facility facility)
        {
            if (_context.Facility == null)
            {
                return Problem("Entity set 'WebApplication2Context.Facility'  is null.");
            }
            _context.Facility.Add(facility);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFacility", new { id = facility.Id }, facility);
        }

        // DELETE: api/Facilities/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFacility(int id)
        {
            if (_context.Facility == null)
            {
                return NotFound();
            }
            var facility = await _context.Facility.FindAsync(id);
            if (facility == null)
            {
                return NotFound();
            }

            _context.Facility.Remove(facility);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FacilityExists(int id)
        {
            return (_context.Facility?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}