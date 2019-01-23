window.onscroll = function()
{stickyBar()}; //activates when user scrolls

var navbar = document.getElementById("navigation"); //gets the navbar
var sticky = navbar.offsetTop; //gets the position of the navbar

function stickyBar() {
  if (window.pageYOffset > sticky)
  {
    navbar.classList.add("sticky"); //when user has scrolled down, adds sticky
  }
  else
  {
    navbar.classList.remove("sticky"); //when user is back to top, removes sticky
  }
}
