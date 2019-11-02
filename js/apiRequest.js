var movieMap = new Map();

$(function () {
    /**
     * This used to refer to a > .flip-details .parent() However, .flip-card is not a direct parent of flip-detail and it would not find the text of it's children.
     * Instead to fix this, we can just find the parent twice, which will retrieve the flip-card-back div. From there we can get the text of the h2 which is the movie title.
     */
    $(document).on('click', '.flip-details', function () {
        var movieID = $(this).parent().parent().find(".movie-id").text();
        localStorage.setItem("detailMovieID", movieID);
    });

    $(document).on('click', '.flip-watchlist', function () {
        var movieID = $(this).parent().parent().find(".movie-id").text();
        var watchlist = JSON.parse(localStorage.getItem("watchList"));
        var movieInfo = movieMap.get(movieID);

        if (!watchlist) {
            watchlist = JSON.stringify([{ id:movieInfo.imdbID, movieInfo }]);
            localStorage.setItem("watchList", watchlist);
        } else {

            if (watchlist.includes(movieInfo)) {
                watchlist = JSON.stringify([...watchlist, { movieInfo }]);
                localStorage.setItem("watchList", watchlist);
            } else {
                console.log("STOP!!!")
            }
        }
    });


    getMovies('Man', 'movie', null, '1');
    getMovies('Time', 'movie', null, '1');
});

function getMovies(keyword, type, year, page) {
    //http://www.omdbapi.com/?apikey=d90cffd6&s=man&type=movie&r=json&page=1

    var url = 'http://www.omdbapi.com/?apikey=d90cffd6';

    if (keyword) {
        url += '&s=' + keyword;

        if (type) {
            url += '&type=' + type;
        }

        if (year) {
            url += '&y=' + year;
        }

        if (page) {
            url += '&page=' + page;
        }

        var apiRequest = new XMLHttpRequest();

        apiRequest.open('GET', url, true);
        apiRequest.send();
        apiRequest.onload = function () {
            var data = JSON.parse(this.response);

            for (var i = 1; i < data.Search.length; i++) {
                var movie = data.Search[i];

                if (movie.imdbID) {
                    var url = 'http://www.omdbapi.com/?apikey=d90cffd6&i=' + movie.imdbID;
                    var apiRequest = new XMLHttpRequest();

                    apiRequest.open('GET', url, true);
                    apiRequest.send();
                    apiRequest.onload = function () {
                        var movieInfo = JSON.parse(this.response);
                        movie.info = movieInfo;
                        movieMap.set(movie.info.imdbID, movie.info);

                        $(".movies-row").append(
                            "<div class='flip-card col-lg-2 col-md-3 col-6' style='background-color:  #072446;'><div class='flip-card-inner'><div class='flip-card-front'><div class='movie-card' style='background-color:  #072446;'><div class='movie-poster'><img src=" + movie.info.Poster + "></div><div class='splash-info'><div class='splash-row-one'><h3 class='movie-title' id='flik-title'>" + movie.info.Title + "</h3></div><p class='show-genre'>" + movie.info.Genre + "</p><div class='movie-time d-none d-lg-block'><img src='../img/UI/Clock.svg'><p class='show-time'>" + movie.info.Runtime + "</p></div></div></div></div><div class='flip-card-back'><div class='movie-id' style='display: none;'>" + movie.info.imdbID + "</div><h2>" + movie.info.Title + "</h2><p>RUNTIME:</p><h5>" + movie.info.Runtime + "</h5><p>DIRECTOR:</p><h5>" + movie.info.Director + "</h><p>RELEASE DATE:</p><h5>" + movie.info.Released + "</h5><p>GENRE</p><h5>" + movie.info.Genre + "</h5><a><div class='flip-watchlist'><p>ADD TO WATCHLIST</p></div></a><a href='details-page.html'><div class='flip-details'><p>VIEW MORE DETAILS</p></div></a></div></div></div>");
                        $(".recommended-row").append(
                            "<div class='flip-card col-lg-2 col-md-3 col-6' style='background-color:  #072446;'><div class='flip-card-inner'><div class='flip-card-front'><div class='movie-card' style='background-color:  #072446;'><div class='movie-poster'><img src=" + movie.Poster + "></div><div class='splash-info'><div class='splash-row-one'><h3 class='movie-title' id='flik-title'>" + movie.Title + "</h3></div><p class='show-genre'>" + "flikGenre" + movie.Genre + "</p><div class='movie-time d-none d-lg-block'><img src='../img/UI/Clock.svg'><p class='show-time'>" + movie.Runtime + "</p></div></div></div></div><div class='flip-card-back'><h2>" + movie.Title + "</h2><p>RUNTIME:</p><h5>" + movie.Runtime + "</h5><p>DIRECTOR:</p><h5>" + movie.Director + "</h><p>RELEASE DATE:</p><h5>" + movie.Released + "</h5><p>GENRE</p><h5>" + movie.Genre + "</h5><a href='watch-list.html'><div class='flip-watchlist'><p>ADD TO WATCHLIST</p></div></a><a><div class='flip-details'><p>VIEW MORE DETAILS</p></div></a></div></div></div>");
                        $(".movie-row").append(
                            "<div class='movie-card col-7 col-md-4' style='background-color:  #072446;'><div class='movie-poster'><img src=" + movie.Poster + "></div><div class='splash-info'><div class='splash-row-one'><h3>" + movie.Title + "</h3></div><p class='show-genre'>" + "</p><div class='movie-time d-none d-lg-block'><p class='show-time'>" + "</p><img src='../img/UI/Clock.svg'></div></div><a href='watch-list.html'><div class='mobile-btn watchlist-btn d-lg-none'>ADD TO<br> WATCHLIST</div></a><div class='mobile-btn details-btn d-lg-none'>MORE<br>DETAILS</div></div>");
                    }
                }
            }
        }
    }
}
