
$(function () {
    
    var apiRequest = new XMLHttpRequest();

    apiRequest.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=d90cffd6', true);

    apiRequest.send();
    
        apiRequest.onload = function(){
        var watchlist = JSON.parse(localStorage.getItem('watchlist'));
        
                $('.watchListItems').append(
                "<div class='row'><div class='filmbox col-12 col-md-6 col-lg-4'><div class='picturebox'><img src='" + element.movieInfo.Poster + "'></div><div class='textbox'><h3></h3><div class='headings'><h5> RUNTIME: " + element.movieInfo.Runtime + "</h5><h5> DIRECTOR: " + element.movieInfo.Director + "</h5><h5> RELEASE DATE: " + element.movieInfo.Released + "</h5></div><div class='button'>SEE DETAILS</div><div class='remove-item'><h6>REMOVE</h6></div></div></div></div>"
            ); 
            
                for(i = 0; i < data.photos.length; i++){
                 if(data.photos[i].id === storageReference){
                    
                    var moviePoster = data.photos[i].Poster;
                     var movieTitle = data.photos[i].Title;
                    var movieDirector = data.photos[i].Director;
                     var movieGenre = data.photos[i].Genre;
                    var movieRuntime = data.photos[i].Runtime;
                    var movieReleaseDate = data.photos[i].Released;
                     
   
       }} // For Statment
        
                       var moviePoster = localStorage.getItem('moviePoster');
           var movieTitle = localStorage.getItem('movieTitle');
           var movieDirector = localStorage.getItem('movieDirector');
           var movieRuntime = localStorage.getItem('movieRuntime');
           var movieReleaseDate = localStorage.getItem('movieReleaseDate');
            
            $(".picturebox").attr('src', movie.Poster);
            $(".").text(movie.Title);
            $("#movieDirector").text(movie.Director);
            $("#movieRuntime").text(movie.Runtime);
            $("#movieReleaseDate").text(movie.Released);
            




            
            
            
            
            
            
            
            
        }

});


