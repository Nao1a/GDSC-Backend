const movieSearchBox = document.getElementById("search-input");

async function loadMovies(searchterm) {
    const URL = `https://omdbapi.com/?s=${searchterm}&page=1&apikey=212c8801`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    let name = data.Search[1].Title
    if(data.Response == 'True') imd(name)

}
async function imd(x){
    const URL = `https://omdbapi.com/?t=${x}&page=1&apikey=212c8801`;
    const response = await fetch(URL);
    const data = await response.json();
    displayMovieList(data)
}

function displayMovieList(movie) {
    document.getElementById('moviePoster').src = movie.Poster;
    document.getElementById('moviePoster').style.display = 'block'
    document.getElementById('movieTitle').innerHTML = movie.Title;
    document.getElementById('movie-year').innerHTML = movie.Year;
    document.getElementById('movie-genre').innerHTML = movie.Genre
}
function theClick() {
    let searchTerm = (movieSearchBox.value)
    loadMovies(searchTerm);
}