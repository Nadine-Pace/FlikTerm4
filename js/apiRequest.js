$(function(){
    
    var recommendedMovies = [
        "SpiderMan",
        "Mike",
        "Nadine", 
        "norman"
    ];
    
    
    
    
    
    for(i = 0; i < recommendedMovies.length; i++){
    
        var movieTitle = recommendedMovies[i];
        
    
        var apiCall = new XMLHttpRequest('http://www.omdbapi.com/?t=' + movieTitle +'&apikey=d90cffd6');
        
        
          
      
            console.log(apiCall)

               $(".recommended-row").append(
             "<div class='col-lg-2 d-block'><div class='flip-card' style='background-color:  #072446;'><div class='flip-card-inner'><div class='flip-card-front'><div class='movie-card' style='background-color:  #072446;'><div class='movie-poster'></div><div class='splash-info'><div class='splash-row-one'><h3 class='splashTitle'>" + movieTitle + "</h3></div> <!--splash-row-one--><p class='splashGenre'>GENRE GOES HERE</p><div class='movie-time'><img src='../img/UI/Clock.svg'><p class='splashTime'>Time</p></div></div><!--splash-info--></div> <!--movie-card--></div> <!--flip-card--front--><div class='flip-card-back'><h2 class='backTitle'>Title</h2><p>RUNTIME:</p><h5 class='backTime'>time</h5><p>DIRECTOR:</p><h5 class='backDirector'>some dude</h5><p>RELEASE DATE:</p><h5 class='backRelease'>yo mama</h5><p>GENRE</p><h5 class='backGenre'>good, actually</h5><a href='watch-list.html'><div class='flip-watchlist'><p>ADD TO WATCHLIST</p></div></a><!--flip-watchlist--><a href='details-page.html'><div class='flip-details'><p>VIEW MORE DETAILS</p></div></a> <!--flip-detals--></div> <!--flip-card-back--></div> <!--flip-card-inner--></div><!--flip-card--></div>"
       );
            
           
            
    
        
        
     
        // Set up variables that take from the object in the API
        
        
     
        
        
   }
    

});
