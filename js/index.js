var button = document.getElementById("btn");

window.onscroll = function(){scrollFunction()};

/*when 20px from top, button appears*/
function scrollFunction()
{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    button.style.display ="block";
  else
    button.style.display = "none";
}

/*goes to top when button is clicked*/
function topFunction()
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
