let searchMovies = document.getElementById('movie');
let searchButton = document.getElementById('search');
let wishList = document.getElementById('wishlist');
let watchedList = document.getElementById('watched');
let resultsDiv = document.getElementById('results');

let apiKey = "e8c34e425d56a8dd724b2c8c82853015";

function moviesSearched() {
    if (searchMovies.value === '') {
        alert('Please enter a movie name');
    } else {
        let query = searchMovies.value.trim();
        let apiUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            
            .then(data => {
                console.log(data); 
                displayResults(data.results)
        })
            
        .catch(error => console.error('Error fetching data:', error));
    }
}

function displayResults(movies) {
    resultsDiv.innerHTML = '';

    if (movies.length === 0) {
        resultsDiv.innerHTML = '<p>No movies found</p>';
        return;
    } 
    movies.forEach(movie => {
    let movieElement =document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date || 'N/A'}</p>
            <button>Add to Wishlist</button>
            <button>Add to Watched</button>
        `;

        resultsDiv.appendChild(movieElement);
})
}

searchButton.addEventListener('click', moviesSearched);
