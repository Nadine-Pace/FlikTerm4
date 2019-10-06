$(function(){

    var apiCall = 'http://www.omdbapi.com/?i=tt3896198&apikey=d90cffd6';

    $.getJSON (apiCall, filmCallBack);

    function filmCallBack(filmData){
        console.log(filmData);
    }

    //active-stage
        $(".grid-item").click (function() {
            $(".single-movie-active").not(this).hide();

            $(this).next(".single-movie-active").stop().toggle(1000);
        });
        
    

});