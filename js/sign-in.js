$(document).ready(function(){
 $(".header-1").height($(window).height());
 
})

$(document).ready(function(){
    $(".sign-up-page").hide(1000);
      $(".sign-in-page").hide(1000);
    });


$(document).ready(function(){
  $("#sign-in-btn").click(function(){
    $(".sign-up-page").hide(1000);
      $(".title").hide(1000);
      $(".sign-in-page").show(1000);
  });
  $("#sign-up-btn").click(function(){
    $(".sign-in-page").hide(1000);
      $(".title").hide(1000);
      $(".sign-up-page").show(1000);
  });
});

