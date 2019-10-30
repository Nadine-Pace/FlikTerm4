$(function () {
    
  
    getMovies('man', 'movie', null, '1');
    getMovies('wonder', 'movie', null, '1');
    
    var row = document.createElement('div');
    row.setAttribute('class', 'row container-fluid');

    function getMovies(keyword, type, year, page) {
    //http://www.omdbapi.com/?apikey=d90cffd6&s=man&type=movie&r=json&page=1

    var url = 'http://www.omdbapi.com/?apikey=d90cffd6';

    if (keyword) {
        url += '&s=' + keyword;

        if (type) {
            url += '&type=' + type;
        }

        if (year) {
            url += '&y=' + year;
        }

        if (page) {
            url += '&page=' + page;
        }

        var apiRequest = new XMLHttpRequest();
        var container = document.getElementById('content-container');
        
       

        apiRequest.open('GET', url, true);
        apiRequest.send();
        apiRequest.onload = function () {
            
            
            
            var data = JSON.parse(this.response);
            
                
                for (var i = 1; i <= data.Search.length; i++) {
                    var movie = data.Search[i];
                    
                    console.log(movie);
                    
                    
                    $(".movies-row").append(
                        
                        "<div class='flip-card col-lg-2 col-md-3 col-6' style='background-color:  #072446;'><div class='flip-card-inner'><div class='flip-card-front'><div class='movie-card' style='background-color:  #072446;'><div class='movie-poster'><img src=" + movie.Poster + "></div><div class='splash-info'><div class='splash-row-one'><h3 class='movie-title' id='flik-title'>" + movie.Title + "</h3></div><p class='show-genre'>" + "flikGenre" + "</p><div class='movie-time d-none d-lg-block'><img src='../img/UI/Clock.svg'><p class='show-time'>" + "flikTime" + "</p></div></div></div></div><div class='flip-card-back'><h2>" + movie.Title + "</h2><p>RUNTIME:</p><h5>" + "flikTime" + "</h5><p>DIRECTOR:</p><h5>" + "flikDirector" + "</h><p>RELEASE DATE:</p><h5>" + "flikDate" + "</h5><p>GENRE</p><h5>" + "flikGenre" + "</h5><a href='watch-list.html'><div class='flip-watchlist'><p>ADD TO WATCHLIST</p></div></a><a href='details-page.html'><div class='flip-details'><p>VIEW MORE DETAILS</p></div></a></div></div></div>"); 
                    
                    
                    
                    $(".recommended-row").append(
                        
                         "<div class='flip-card col-lg-2 col-md-3 col-6' style='background-color:  #072446;'><div class='flip-card-inner'><div class='flip-card-front'><div class='movie-card' style='background-color:  #072446;'><div class='movie-poster'><img src=" + movie.Poster + "></div><div class='splash-info'><div class='splash-row-one'><h3 class='movie-title' id='flik-title'>" + movie.Title + "</h3></div><p class='show-genre'>" + "flikGenre" + movie.Genre + "</p><div class='movie-time d-none d-lg-block'><img src='../img/UI/Clock.svg'><p class='show-time'>" + movie.Runtime + "</p></div></div></div></div><div class='flip-card-back'><h2>" + movie.Title + "</h2><p>RUNTIME:</p><h5>" + movie.Runtime + "</h5><p>DIRECTOR:</p><h5>" + movie.Director + "</h><p>RELEASE DATE:</p><h5>" + movie.Released + "</h5><p>GENRE</p><h5>" + movie.Genre + "</h5><a href='watch-list.html'><div class='flip-watchlist'><p>ADD TO WATCHLIST</p></div></a><a href='#' onclick='workDammit()'><div class='flip-details'><p>VIEW MORE DETAILS</p></div></a></div></div></div>");
                    
                    
                    $(".movie-row").append (
                        "<div class='movie-card col-7 col-md-4' style='background-color:  #072446;'><div class='movie-poster'><img src=" + movie.Poster + "></div><div class='splash-info'><div class='splash-row-one'><h3>" + movie.Title + "</h3></div><p class='show-genre'>" + "</p><div class='movie-time d-none d-lg-block'><p class='show-time'>" + "</p><img src='../img/UI/Clock.svg'></div></div><a href='watch-list.html'><div class='mobile-btn watchlist-btn d-lg-none'>ADD TO<br> WATCHLIST</div></a><a href='details-page.html'><div class='mobile-btn details-btn d-lg-none'>MORE<br>DETAILS</div></a></div>");

             }
             
                          
        }
    }
}

    function createTextElement(parent, text) {

        if (parent && text) {
            var textElement = document.createTextNode(text);
            parent.appendChild(textElement);
        }
    }

    function getMovieInformation(id, parentNode, plotType) {
        //http://www.omdbapi.com/?apikey=d90cffd6&i=tt0316654&plot=short
        var url = 'http://www.omdbapi.com/?apikey=d90cffd6';

        if (id) {
            url = url + '&i=' + id;

            if (plotType) {
                url = url + '&plot=' + plotType;
            }

            var apiRequest = new XMLHttpRequest();
            apiRequest.open('GET', url, true);
            apiRequest.send();
            apiRequest.onload = function () {
                var data = JSON.parse(this.response);

                if (parentNode) {
                    createTextElement(parentNode, data.Plot);
                }

                return data;
            }
        }

        return null;
    }
    
    
    
    
     
    
//details page local storage
    
    function workDammit(){
        
        console.log("WORKIN");
    }
    
   
    
      $(".flip-details").hide();
    
     $(".flip-details").on("click", function() {
     
       console.log("CLICK");
        
        var storageReference = $(this).find(".flik-title").text();
        console.log(storageReference);
        
        for(i = 0; i < data.Search.length; i ++){
            
            if(data.Search[i].id === storageReference) {
                
                console.log("it works")
                
            }
        }
        
        
    });
    
    
    

});

