$(function(){

    
    
    
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
    
    

    
    
    
    
    
    //welcome & user icon
    
    
    $("#image-1").click(function() {
       
        console.log("it clicks");
        
        var loggedUser = $(this).parent(".user-icon-sam").find(".sam").text();
        
        localStorage.setItem("loggedUser", loggedUser);
        
        
        var homeUser = localStorage.getItem("loggedUser");
        
        
        
        console.log(homeUser + "home user working");
        
        
        
        console.log(loggedUser);
        
        
        document.getElementById("#welcome-message").text(loggedUser);
    });
});




var importMovie = localStorage.getItem("transferMovie");

// Run API withg variable as search 

// s



