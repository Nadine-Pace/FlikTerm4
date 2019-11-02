
$(function () {

    $('.remove-item').on('click', function () {
        $(this).closest('.filmbox').fadeOut(600);
    });

    // ARRAY
    var watchList = JSON.parse(localStorage.getItem('watchList'));

    if (watchList) {

        console.log(watchList);
        watchList.forEach(element => {
            console.log(element.movieInfo.Title);
            $('.watchListItems').append(
                "<div class='row'><div class='filmbox col-lg-4 col-md-6 col-lg-4'><div class='picturebox'><img src='" + element.movieInfo.Poster + "'></div><div class='textbox'><h3></h3><div class='headings'><h5> RUNTIME: " + element.movieInfo.Runtime + "</h5><h5> DIRECTOR: " + element.movieInfo.Director + "</h5><h5> RELEASE DATE: " + element.movieInfo.Released + "</h5></div><div class='button'>WATCH NOW</div><div class='remove-item'><h6>REMOVE FROM WATCHLIST</h6></div></div></div></div>"
            );
        });
    }


    // Get API request sructure form Cludia and paste here

    // run the api here with the vlaue (movieTitle) as a varibale 

    // unpack API json result, store required information as varibles 

    // create title cards that show the movies using above variables






   
});



















































