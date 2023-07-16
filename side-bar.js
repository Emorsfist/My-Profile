window.onscroll = function() {myFunction()};

var side = document.getElementById("sidebar");
var sticky = side.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    side.classList.add("sticky");
  } else {
    side.classList.remove("sticky");
  }
}