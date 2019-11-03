$(function () {

    var movieId = localStorage.getItem("detailMovieID");

    if (movieId) {
        var url = 'http://www.omdbapi.com/?apikey=d90cffd6&i=' + movieId;
        var apiRequest = new XMLHttpRequest();

        apiRequest.open('GET', url, true);
        apiRequest.send();
        apiRequest.onload = function () {
            var movie = JSON.parse(this.response);

            $("#moviePoster").attr('src', movie.Poster);
            $("#movieTitle").text(movie.Title);
            $("#movieDirector").text(movie.Director);
            $("#movieGenre").text(movie.Genre);
            $("#movieRuntime").text(movie.Runtime);
            $("#movieRating").text(movie.Rated);
            $("#movieReleaseDate").text(movie.Released);
            $("#movieActors").text(movie.Actors);
            $("#movieLanguage").text(movie.Language);
            $("#movieProduction").text(movie.Production);
            $("#moviePlot").text(movie.Plot);
            $("#movieAwards").text(movie.Awards);

            if (movie.Ratings) {

                movie.Ratings.forEach(element => {
                    $(".ratings-box").append("<h5 class='heading imbd'>" + element.Source + "</h5> <span class='info'>" + element.Value + "</span>");
                });
            }
            
        }

    }

    $(document).on('click', '.watchlist-btn-details', function () {
        var watchlist = JSON.parse(localStorage.getItem("watchList"));
        var movieInfo = movieMap.get(movieId);

        if (!watchlist) {
            watchlist = JSON.stringify([{ movieInfo }]);
            localStorage.setItem("watchList", watchlist);
        } else {
            var movieExists = watchlist.find((movie) => {

                if (movie.movieInfo) {
                    return movie.movieInfo.imdbID === movieId;
                }
            });
            
            if (!movieExists) {
                watchlist = JSON.stringify([...watchlist, { movieInfo }]);
                localStorage.setItem("watchList", watchlist);
            } else {
                alert("Movie already exists on watchlist.");
            }
        }
    });
});

