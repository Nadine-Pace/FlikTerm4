$(document).ready(function(){
 $(".container-1").height($(window).height());
 
})

$(document).ready(function(){
    $(".container-2").hide(1000);
      $(".container-3").hide(1000);
    });


$(document).ready(function(){
  $("#image-1").click(function(){
    $(".container-3").hide(1000);
      $(".container-1").hide(1000);
      $(".container-2").show(1000);
  });
    
    $(document).ready(function(){
  $("#image-2").click(function(){
    $(".container-3").hide(1000);
      $(".container-1").hide(1000);
      $(".container-2").show(1000);
  });
        
    $(document).ready(function(){
  $("#image-3").click(function(){
    $(".container-3").hide(1000);
      $(".container-1").hide(1000);
      $(".container-2").show(1000);
  });
        
    
  $("#image-4").click(function(){
    $(".container-1").hide(1000);
      $(".container-2").hide(1000);
      $(".container-3").show(1000);
  });
});
});
});
