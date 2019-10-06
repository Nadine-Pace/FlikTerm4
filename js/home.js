$(function(){
    
    console.log("home js linked");
    
    //hero slider
    
    $(".hero-slider").hide();
    $(".slide-one").show();
    
    $(".indicator-one").click(function() {
        $(".hero-slider").hide();
        $(".slide-one").show();
    });
    
    $(".indicator-two").click(function() {
        $(".hero-slider").hide();
        $(".slide-two").show();
    });
    
    $(".indicator-three").click(function() {
        $(".hero-slider").hide();
        $(".slide-three").show();
    });
    
    $(".indicator-four").click(function() {
        $(".hero-slider").hide();
        $(".slide-four").show();
    });
    
    
    
    
    
    
    
    
    
    
    
    
    //api call
    
     var apiCall = 'http://www.omdbapi.com/?i=tt3896198&apikey=d90cffd6';

    $.getJSON(apiCall, filmCallBack);

    function filmCallBack(filmData){
        console.log(filmData);
    }

});



