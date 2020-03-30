$(document).ready(function() {
  $("#cross-button").click(function() {
    $("#navbar-elements").slideToggle(200,"swing");
  });
});
function myFunction(x) {
  if (x.matches) {
      document.getElementById("navbar-elements").style.display = "none"; // If media query matches
  } else {
   document.body.style.backgroundColor = "white";
   document.getElementById("navbar-elements").style.display = "block";
  }
}

var x = window.matchMedia("(max-width: 930px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes