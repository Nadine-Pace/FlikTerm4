$(function(){

    var apiCall = 'http://www.omdbapi.com/?i=tt3896198&apikey=d90cffd6';

    $.getJSON (apiCall, filmCallBack);

    function filmCallBack(filmData){
        console.log(filmData);
    }
    
    var moviePoster = localStorage.getItem("moviePoster");
    var movieTitle = localStorage.getItem("movieTitle");
    var movieDirector = localStorage.getItem("movieDirector");
    var movieGenre = localStorage.getItem("movieGenre");
    var movieRuntime = localStorage.getItem("movieRuntime");
    
    $("#moviePoster").attr('src', moviePoster);
    $("#movieTitle").text(movieTitle);
    $("#movieDirector").text(movieDirector);
    $("#movieGenre").text(movieGenre);
    $("#movieRuntime").text(movieRuntime);


});

