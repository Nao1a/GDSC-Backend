let input = document.getElementById("input");
let moviedata = 'https://www.omdbapi.com/?i=tt3896198&apikey=212c8801'

function searchMovies() {
    fetch(moviedata)
        .then(res => res.json())
        .then(movie => {
            try{
                if (input.value == movie.Title) {
                    document.getElementById('movieTitle').textContent = movie.Title;
                    document.getElementById('movieReleaseDate').textContent = `Release Date: ${movie.Released}`;
                    document.getElementById('movieGenre').textContent = `Genre: ${movie.Genre}`;
                    document.getElementById('moviePoster').src = movie.Poster;
                    document.getElementById('moviePoster').alt = `${movie.Title} Poster`;
                    document.getElementById('moviePlot').textContent = movie.Plot;
                }
                else {
                    document.getElementById('movieTitle').textContent = "no movie by that name";
                    document.getElementById('movieReleaseDate').textContent = '';
                    document.getElementById('movieGenre').textContent = '';
                    document.getElementById('moviePoster').src = '';
                    document.getElementById('moviePoster').alt = '';
                    document.getElementById('moviePlot').textContent = '';
                }
            }
            catch(err){console.log("there is a problem ")}
        })
}