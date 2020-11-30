//when mouse hovers, current text disappears and other text appears

function showExperience()
{
  document.getElementById("javaskill").innerHTML = "5000+ lines"
  document.getElementById("htmlskill").innerHTML = "5000+ lines"
  document.getElementById("cssskill").innerHTML = "1000+ lines"
  document.getElementById("gitskill").innerHTML = "2 years"
}

function showSkill()
{
  document.getElementById("javaskill").innerHTML = "Java"
  document.getElementById("htmlskill").innerHTML = "HTML"
  document.getElementById("cssskill").innerHTML = "CSS"
  document.getElementById("gitskill").innerHTML = "Git"
}

function hoverExperience()
{
  var idArray = ["javaskill", "htmlskill", "cssskill", "gitskill"]
  for (var i = 0; i < idArray.length; i++)
  {
    document.getElementById(idArray[i]).addEventListener("mouseenter", showExperience)
    document.getElementById(idArray[i]).addEventListener("mouseleave", showSkill)
  }
}

showExperience()
showSkill()
hoverExperience()
