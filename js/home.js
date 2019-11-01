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
    
    

    
    
    
    
    
    //welcome & user icon
    
    
    $("#image-1").click(function() {
       
        console.log("it clicks");
        
        var loggedUser = $(this).parent(".user-icon-sam").find(".sam").text();
        
        localStorage.setItem("loggedUser", loggedUser);
        
        
        var homeUser = localStorage.getItem("loggedUser");
        
        
        
        console.log(homeUser + "home user working");
        
        
        
        console.log(loggedUser);
        
        
        document.getElementById("#welcome-message").text(loggedUser);
        
        
        
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    //api call
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




var importMovie = localStorage.getItem("transferMovie");

// Run API withg variable as search 

// s



