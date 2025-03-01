let searchMovies = document.getElementById('movie');
let searchButton = document.getElementById('search');
let wishList = document.getElementById('wishlist');
let watchedList = document.getElementById('watched');

let apiKey = "e8c34e425d56a8dd724b2c8c82853015";

function moviesSearched() {
    if (searchMovies.value === '') {
        alert('Please enter a movie name');
    } else {
        let query = searchMovies.value.trim();
        let apiUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => console.log(data)) // Check if API is returning results
            .catch(error => console.error('Error fetching data:', error));
    }
}

// ✅ Add this to make the button work
searchButton.addEventListener('click', moviesSearched);
