$(function () {





    // var apiRequest = new XMLHttpRequest();

    // apiRequest.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=d90cffd6', true);

    // apiRequest.send();

    // apiRequest.onload = function () {
    //     var data = JSON.parse(this.response);

    //     function createContainers(moviePoster, movieTitle, movieRuntime, movieDirector, movieReleaseDate, movieGenre) {
    //         $(".library-filter-movies").append(
    //             <div class="library-filter-movies row col-xs-3">
    //                 <img src="moviePoster" />
    //                 <h3 id="movieTitle">
    //                     <span>" + movieTitle + "</span>
    //                 </h3>
    //                 <p id="movieRuntime">
    //                     <span>" + movieRuntime + "</span>
    //                 </p>
    //                 <p id="movieDirector">
    //                     <span>" + movieDirector + "</span>
    //                 </p>
    //                 <p id="movieReleaseDate">
    //                     <span>" + movieReleaseDate + "</span>
    //                 </p>
    //                 <p id="movieGenre">
    //                     <span>" + movieGenre "</span>
    //                 </p>
    //             </div>);
    //     };


    //     for (i = 0; i < data.photos.length; i++) {
    //         moviePoster = data.photos[i].Poster;
    //         movieTitle = data.photos[i].Title;
    //         movieDirector = data.photos[i].Director;
    //         movieGenre = data.photos[i].Genre;
    //         movieRuntime = data.photos[i].Runtime;
    //         movieReleaseDate = data.photos[i].Released;

    //         createContainers(moviePoster, movieTitle, movieDirector, movieGenre, movieRuntime, movieReleaseDate);
    //     };

    //     $(".library-filter-movies").on("click", function(){
    //         var storageReference = +$(this).find ("#photo-id").text();
    //         console.log(storageReference);

    //         for(i = 0; i < data.photos.length; i++){
    //             if(data.photos[i].id === storageReference){
                    
    //                 var moviePoster = data.photos[i].Poster;
    //                 var movieTitle = data.photos[i].Title;
    //                 var movieDirector = data.photos[i].Director;
    //                 var movieGenre = data.photos[i].Genre;
    //                 var movieRuntime = data.photos[i].Runtime;
    //                 var movieReleaseDate = data.photos[i].Released;

    //                 localStorage.setItem("moviePoster", moviePoster);
    //                 localStorage.setItem("movieTitle", movieTitle);
    //                 localStorage.setItem("movieDirector", movieDirector);
    //                 localStorage.setItem("movieGenre", movieGenre);
    //                 localStorage.setItem("movieRuntime", movieRuntime);
    //                 localStorage.setItem("movieReleaseDate", movieReleaseDate);
                    
    //             }
    //         }

    //     });
    // }




});