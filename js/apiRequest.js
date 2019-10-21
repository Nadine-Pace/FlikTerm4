$(function(){

    var moviePoster = localStorage.getItem("moviePoster");
    var movieTitle = localStorage.getItem("movieTitle");
    var movieDirector = localStorage.getItem("movieDirector");
    var movieGenre = localStorage.getItem("movieGenre");
    var movieRuntime = localStorage.getItem("movieRuntime");
    var movieReleaseDate = localStorage.getItem("movieReleaseDate");

    $("#moviePoster").attr('src', moviePoster);
    $("#movieTitle").attr(movieTitle);
    $("#movieDirector").attr(movieDirector);
    $("#movieGenre").attr(movieGenre);
    $("#movieRuntime").attr(movieRuntime);
    $("#movieReleaseDate").attr(movieReleaseDate);
});