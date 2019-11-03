
$(function () {
    
var movieName = localStorage.getItem('detailmovieID');
    
       // Get API request structure form and put here
    
    if (movieName) {
        var url ='http://www.omdbapi.com/?i=tt3896198&apikey=d90cffd6' + movieName;
        var apiRequest = new XMLHttpRequest();
        
        apiRequest.open('GET', url, true);
        apiRequest.send();
        apiRequest.onload =function(){
            
         // run the api here with the value (movieTitle) as a variable
            
            var movieName = JSON.parse(this.response);
        
            $('.picturebox').attr('src', movie.Poster);
            $('.picturebox').text(movie.Title);
            $('.movieDirector').text(movie.Director);
            $('.movieRuntime').text(movie.Runtime);
            $('.movieRelease').text(movie.Released);
            
        // create title cards that show the movies using above variables
        
        if (watchlist){
     
     
         watchlist.forEach(element => {
              $('.watchListItems').append(
                "<div class='row'><div class='filmbox col-12 col-md-6 col-lg-4'><div class='picturebox'><img src='" + element.movieInfo.Poster + "'></div><div class='textbox'><h3></h3><div class='headings'><h5> RUNTIME: " + element.movieInfo.Runtime + "</h5><h5> DIRECTOR: " + element.movieInfo.Director + "</h5><h5> RELEASE DATE: " + element.movieInfo.Released + "</h5></div><div class='button'>WATCH NOW</div><div class='remove-item'><h6>REMOVE FROM WATCHLIST</h6></div></div></div></div>"
            );

     })
 }

        
   }
        
        
        
    }

});


