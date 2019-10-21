$(function(){

    var apiCall = 'http://www.omdbapi.com/?i=tt3896198&apikey=d90cffd6';

    $.getJSON (apiCall, filmCallBack);

    function filmCallBack(filmData){
        console.log(filmData);
    }
    
    
    $(".remove-item").on("click", function(){$(this).closest(".filmbox").fadeOut(600);
    });
    
    $(".remove").on("click", function(){$(".filmbox").fadeOut(600);
    });
    
    
    function createContainers (img_src, movieName, runTime, director, releaseDate){
        
        $().append("<div class='filmboxleft'><img src=" + img_src "><h3 id='movie-title'></h3><h5 id='runtime'>Run Time:</h5><h5 id='director'>Director:</h5><h5 id='release-date'>Release Date:</h5><div class="button">WATCH NOW</div><div class="remove-item"><h6>REMOVE FROM WATCHLIST</h6></div>
            </div>
        
     
            
                        

        )
        
        
    }
    
    
    
});
