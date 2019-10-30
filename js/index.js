 /* Hide and Show */


$(document).ready(function(){
  $('.container-2').hide();
  $('.container-3').hide();

 $("#image-1").add("#image-2").add("#image-3").click(function(){
  $('.container-2').fadeTo(500, 1);
  $('.container-1').hide();
  $('.container-3').hide();
 });

 $("#image-4").click(function(){
  $('.container-3').fadeTo(500, 1);
  $('.container-1').hide();
  $('.container-2').hide();
 });
});


/* Validation */


$(document).ready(function(){
$("#submit-btn").click(function(){
  var password = $('#password1').validate();

  $(".error").remove();

  if (password.length < 8){
    $('#password1').after('<span class="error">Password must be at least 8 characters long</span>');
  }
});


/* Local Storage */


$("#sign-in-btn").add("sign-up-btn").on("click", function(){
var storageRefrence = +$(this).find("#image-1").text();
console.log(storageRefrence);

for(i =0; i < Data.image.length; i++){
  if(data.image[i].id === storageRefrence){




  }
}

});


});
