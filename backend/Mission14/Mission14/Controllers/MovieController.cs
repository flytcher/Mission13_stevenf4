using Microsoft.AspNetCore.Mvc;
using Mission14.Data;
using System.Linq;

namespace Mission14.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;
        public MovieController(MoviesDbContext temp)
        {
            context = temp;
        }

        public IActionResult Get()
        {
            //Gets the movie data and filters out any non edited movies. also orders alphabetically by title.
            var editedMovies = context.Movies.Where(m => m.Edited == "Yes").OrderBy(m => m.Title);
            return Ok(editedMovies);
        }
    }
}
