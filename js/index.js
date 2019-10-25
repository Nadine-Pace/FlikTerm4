$(document).ready(function(){
  $(".container-1").show(1000);
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

$(document).ready(function() {
  $('.error').hide();
  $('#submit').click(function(){
    var name = $('#name').val();
    var email = $('#email').val();

    if(name== ''){
      $('#name').next().show();
      return false;
    }
    if(email== ''){
      $('#email').next().show();
      return false;
    }
    if(IsEmail(email)==false){
      $('#invalid_email').show();
      return false;
    }
    $.post("", $("#myform").serialize(),  function(response) {
      $('#myform').fadeOut('slow',function(){
      $('#correct').html(response);
      $('#correct').fadeIn('slow');
   });
 });
return false;
});
});
function IsEmail(email) {
var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(!regex.test(email)) {
return false;
}else{
return true;
}
}

   
