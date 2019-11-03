$(function(){
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


$(document).on("click", "#sign-in-btn", function(){

var password  = $(this).parent(".mainParent").find("input").val();
console.log(password);

var registeredPasswords = ["samcoolcat", "jack", "bobbyboy"]

if(password === ""){
  $(".validator").text("While FLIK! You're missing something...");
} else if(password === registeredPasswords[0]){
  localStorage.setItem("activeUser", "SAM");
  location.href = "http://nadine.pale.co.za/FlikTerm4/"
} else if(password === registeredPasswords[1]){
  localStorage.setItem("activeUser", "JACK");
  location.href = "http://nadine.pale.co.za/FlikTerm4/"
}else if(password === registeredPasswords[2]){
  localStorage.setItem("activeUser", "BOBBY");
  location.href ="http://nadine.pale.co.za/FlikTerm4/"
} else{
  $(".validator").text("Your password does not match this profile... ");
}


});