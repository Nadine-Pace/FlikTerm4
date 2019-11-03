
function doSearch() {
    var title = $('.title-search').val();

    if (title) {
        $(".movies-row").empty();
        getMovies(title, null, null);
    } else {
        alert("Please enter a title to search.");
    }    

}

function doFilter() {
    var genre = $('.genre-dropdown option:selected').text();
    var imdbRating = $('.imdb-score-dropdown option:selected').text();
    var year = $('.year-search').val();

    var movieArray = Array.from(movieMap.values());

    if (genre && "None" !== genre) {
        movieArray = movieArray.filter((movie) => {
            //"Comedy, Drama, Fantasy, Romance, Sci-Fi"            
            var genres = movie.Genre.split(", ");
            //["Comedy", "Drama", "Fantasy", "Romance", "Sci-Fi"]

            if (genres.includes(genre.trim())) {
                return movie;
            }
        });
    }

    if (imdbRating && "None" !== imdbRating) {
        movieArray = movieArray.filter((movie) => {

            if (Number(movie.imdbRating) >= Number(imdbRating)) {
                return movie;
            }
        });
    }

    
    if (year) {
        movieArray = movieArray.filter((movie) => {
            
            if (Number(movie.Year) >= Number(year)) {
                return movie;
            }
        });
    }

    $(".movies-row").empty();

    movieArray.forEach(movieInfo => {
        buildHtml(movieInfo, ".movies-row");
    });
}