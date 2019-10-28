$(function(){
    
  var apiRequest = new XMLHttpRequest();  
    
  apiRequest.open('GET','http://www.omdbapi.com/?i=tt3896198&apikey=d90cffd6', true);
    
  apiRequest.send();
    
  apiRequest.onload = function (){
      var data = JSON.parse(this.response);
      
      function createContainers (img_src, title, runTime, director, released){
         $(".filmbox").append("<div class='filmbox col-xs-12 col-md-6 col-lg-4'><div class='picturebox'<img src=" + img_src "></div><h3 id='movie-title'> " + title + "</h3><h5 id='runtime'>Run Time: " + runTime + "</h5><h5 id='director'>Director: " + director + "</h5><h5 id='release-date'>Release Date: " + release + "</h5><div class="button">WATCH NOW</div><div class="removeitem"><h6>REMOVE FROM WATCHLIST</h6></div></div>");
         }
      
      for( i=0; i < data.photos.length; i++){
          
        runTime = data[i].runtime;
        title = data[i].title;
        director= data[i].director;
        released= data[i].released;
          
          createContainers (img_src, movieName, runTime, director, releaseDate);
      }
      
      $(".filmbox").on("click", function(){
          
          var storageReference = +$(this).find().text();
          console.log(storageReference);
          
      });
  }
    
    
});

















































