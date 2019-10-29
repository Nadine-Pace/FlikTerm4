$(function(){

    
    
    
    //hero slider
    
    $(".hero-slider").hide();
    $(".slide-one").show();
    
    $(".indicator-one").click(function() {
        $(".hero-slider").hide();
        $(".slide-one").show();
    });
    
    $(".indicator-two").click(function() {
        $(".hero-slider").hide();
        $(".slide-two").show();
    });
    
    $(".indicator-three").click(function() {
        $(".hero-slider").hide();
        $(".slide-three").show();
    });
    
    $(".indicator-four").click(function() {
        $(".hero-slider").hide();
        $(".slide-four").show();
    });
    
    
    
    
    //see more button - on click
    
    $(".see-less").hide();
    
    $(".see-more").click(function() {
        $(".see-more").hide();
        $(".see-less").show();
        $(".recommended-row").animate({height: '80vh'}, 500);
    });
    
    $(".see-less").click(function() {
        $(".see-less").hide();
        $(".see-more").show();
        $(".recommended-row").animate({height: '40vh'}, 500);
    });
    
    
    
    
        var apiCall = 'http://www.omdbapi.com/?t=First+Man&apikey=d90cffd6'
    
        $.getJSON(apiCall, filmCallBack);
    
        // First Man //

        function filmCallBack(FirstMan){
    
            var filmName = FirstMan.Title;
            var filmGenre = FirstMan.Genre;
            var filmPoster = FirstMan.Poster;
            var filmRuntime = FirstMan.Runtime;
            var filmDirector = FirstMan.Director;
            var filmRelease = FirstMan.Released;
            var filmDescription = FirstMan.Plot;
            var filmYear = FirstMan.Year;
            
            $(".splashTitle").text(filmName);
            $(".backTitle").text(filmName);
            $(".splashGenre").text(filmGenre);
            $(".backGenre").text(filmGenre);
            $(".splashTime").text(filmRuntime);
            $(".backTime").text(filmRuntime);
            $(".backDirector").text(filmDirector);
            $(".backRelease").text(filmRelease);
            // $(".movie-poster").attr('src', filmPoster)
            $(".backDescription").text(filmDescription);
            $(".backYear").text(filmYear);
        }
    
      
    
    
    
      
          
    
});



