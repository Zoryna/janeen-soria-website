window.onscroll = function() {stickybar()}; //activates when user scrolls

var navbar = document.getElementById("navbar"); //gets the navbar
var sticky = navbar.offsetTop; //gets the position of the navbar

function stickybar() {
  if (window.pageYOffset >= sticky)
  {
    navbar.classList.add("sticky") //when user has scrolled down, adds sticky
  }
  else
  {
    navbar.classList.remove("sticky"); //when user is back to top, removes sticky
  }
}
