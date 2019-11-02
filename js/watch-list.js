
$(function(){
    
       $('.remove-item').on('click', function(){$(this).closest('.filmbox').fadeOut(600);
    });
    
    
    var importedMovies = localStorage.getItem('storageName');
    

    // Get API request sructure form Cludia and paste here
     
    // run the api here with the vlaue (movieTitle) as a varibale 
    
    // unpack API json result, store required information as varibles 
    
    // create title cards that show the movies using above variables
    
    
    
    
    
    
    $('.watchListItems').append(
        "<div class='filmbox col-12 col-md-6 col-lg-4'><div class='picturebox'><img src='../img/FilmThumbnails/Titanic.jpg'></div><div class='textbox'><h3></h3><div class='hheadings'><h5> RUNTIME:</h5><h5> DIRECTOR:</h5><h5> RELEASE DATE:</h5></div><div class='button'>SEE DETAILS</div><div class='remove-item'><h6>REMOVE</h6></div></div></div>"
    );
    
    

  
});
        


















































