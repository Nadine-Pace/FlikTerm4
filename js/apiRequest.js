$(function(){

    var apiRequest = new XMLHttpRequest();


    apiRequest.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=d90cffd6', true);

    apiRequest.send();

    var data = JSON.parse(this.response);
        
        function createContainers(filmName, filmDuration, filmRating, filmImage){
        $(".rover-images").append(

            "<div class='rover-image-container col-xs-3'><img src=" + filmImage + "><h6 id='filmName'><strong>Camera:</strong> " + filmDuration + "</h6><h6><strong>Photo ID:</strong> <span id='photo-id'>" + filmRating + "</span></h6><h6 id='photo-number'>" + currentImages + " / " + total_images + "</h6><a href='curiosityIndividual.html'>Click to view</a></div>"
        );
});