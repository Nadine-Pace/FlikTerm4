<<<<<<< HEAD
$(function (){
    
    $('.remove-item').on('click', function () {
        $(this).closest('.filmbox').fadeOut(600);
    });

    
=======
$(function () {
    $(document).on('click', '.remove-item', function () {
        var flimBox = $(this).parent().parent();
        var movieID = flimBox.find(".movie-id").text();

        if (movieID) {
            var watchlist = JSON.parse(localStorage.getItem("watchList"));
            var listMovie = watchlist.find((movie) => {
                return movie.movieInfo.imdbID === movieID;
            });

            if (listMovie) {
                var newList = watchlist.filter((movie) => {
                    return movie !== listMovie;
                });

                localStorage.setItem("watchList", JSON.stringify(newList));
                flimBox.fadeOut(600);
            }
        }
    });

    // ARRAY
    var watchList = JSON.parse(localStorage.getItem('watchList'));

    if (watchList) {

        console.log(watchList);
        watchList.forEach(element => {
            $('.watchListItems').append(
                "<div class='row'><div class='filmbox col-lg-4 col-md-6 col-lg-4'><div class='movie-id' style='display=none;'>" + element.movieInfo.imdbID + "</div><div class='picturebox'><img src='" + element.movieInfo.Poster + "'></div><div class='textbox'><h3></h3><div class='headings'><h5> RUNTIME: " + element.movieInfo.Runtime + "</h5><h5> DIRECTOR: " + element.movieInfo.Director + "</h5><h5> RELEASE DATE: " + element.movieInfo.Released + "</h5></div><div class='button'>WATCH NOW</div><div class='remove-item'><h6>REMOVE FROM WATCHLIST</h6></div></div></div></div>"
            );
        });
    }
                
                
           
            






   
});

>>>>>>> ca3398d42d5ae8083f283b6f61fb8e81a70bd738

})