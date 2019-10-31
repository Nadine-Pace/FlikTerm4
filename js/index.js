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


$("#sign-in-btn").on("click", function(){

var password  = +$(this).find("#password1").text();

if (password === "")
  alert ("Please enter Password")

  else if (password1 === "12SAM34") { 
alert ("Password did not match: Please try again...") 
return false; 
} 

else if (password1 === "bob5678") { 
  alert ("Password did not match: Please try again...") 
  return false; 
  } 

  else if (password1 === "jAcK9090") { 
    alert ("Password did not match: Please try again...") 
    return false; 
    } 

    else{ 
      alert("Welcome to FLIK") 
      return true; 
      } 

});



$("#sign-up-btn").on("click", function(){

  var password1 = +$(this).find("#password-01").text();
  var password2 = +$(this).find("#password-02").text();
  
  if (password1 === "")
    alert ("Please enter Password");
  
    else if (password2 == '') 
    alert ("Please enter confirm password"); 
  
      else{ 
        alert("Welcome to FLIK") 
        return true; 
        } 
  
  });
