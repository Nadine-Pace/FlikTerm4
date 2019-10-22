$(function(){
    
    console.log("api js linked");
    
    var apiRequest = new XMLHttpRequest();
    
    apiRequest.open('GET', 'http://www.omdbapi.com/?apikey=3b5ca08c&', 'true');
    
    apiRequest.send();
    
    apiRequest.onload = function() {
        
        var data = JSON.parse(this.response);
        
        function createContainers(flikPoster, flikTitle, flikGenre, flikTime, flikDirector, flikDate) {
            //single movie flip-card
            
            $(".flip-card").append(
                "<div class='flip-card-inner'><div class='flip-card-front'><div class='movie-card' style='background-color:  #072446;'><div class='movie-poster'>" + flikPoster + "</div><div class='splash-info'><div class='splash-row-one'><h3>" + flikTitle + "</h3></div><p class='show-genre'>" + flikGenre + "</p><div class='movie-time d-none d-lg-block'><p class='show-time'>" + flikTime + "</p><img src='../img/UI/Clock.svg'></div></div></div></div><div class='flip-card-back'><h2>" + flikTitle + "</h2><p>RUNTIME:</p><h5>" + flikTime + "</h5><p>DIRECTOR:</p><h5>" + flikDirector + "</h><p>RELEASE DATE:</p><h5>" + flikDate + "</h5><p>GENRE</p><h5>" + flikGenre + "</h5><a href='watch-list.html'><div class='flip-watchlist'><p>ADD TO WATCHLIST</p></div></a><a href='details-page.html'><div class='flip-details'><p>VIEW MORE DETAILS</p></div></a></div></div>"
            );
            
        }; //createContainers
        
        
        for(i = 0; i < data.photos.length; i++){
            
            
        }
        
        
        
        
        
        
    } //api onload function
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    //var moviePoster = localStorage.getItem("moviePoster");
    //var movieTitle = localStorage.getItem("movieTitle");
    //var movieDirector = localStorage.getItem("movieDirector");
    //var movieGenre = localStorage.getItem("movieGenre");
    //var movieRuntime = localStorage.getItem("movieRuntime");
    //var movieReleaseDate = localStorage.getItem("movieReleaseDate");

    //$("#moviePoster").attr('src', moviePoster);
    //$("#movieTitle").attr(movieTitle);
    //$("#movieDirector").attr(movieDirector);
    //$("#movieGenre").attr(movieGenre);
    //$("#movieRuntime").attr(movieRuntime);
    //$("#movieReleaseDate").attr(movieReleaseDate);
});
