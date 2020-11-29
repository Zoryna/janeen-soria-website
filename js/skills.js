//when mouse hovers, current text disappears and other text appears

//https://stackoverflow.com/questions/48610654/how-to-make-a-button-disappear-and-reappear-after-x-seconds
//https://www.w3schools.com/jsref/event_onmouseenter.asp

//do a for loop for each skill?
document.getElementById("javaskill").addEventListener("mouseenter", showExperience)
document.getElementById("javaskill").addEventListener("mouseleave", showSkill)

document.getElementById("htmlskill").addEventListener("mouseenter", showExperience)
document.getElementById("htmlskill").addEventListener("mouseleave", showSkill)

document.getElementById("cssskill").addEventListener("mouseenter", showExperience)
document.getElementById("cssskill").addEventListener("mouseleave", showSkill)

document.getElementById("gitskill").addEventListener("mouseenter", showExperience)
document.getElementById("gitskill").addEventListener("mouseleave", showSkill)

function showExperience()
{
  document.getElementById("javaskill").innerHTML = "5000+ lines"
  document.getElementById("htmlskill").innerHTML = "5000+ lines"
  document.getElementById("cssskill").innerHTML = "1000+ lines"
  document.getElementById("gitskill").innerHTML = "2 years"


  /*var experience = document.getElementByTagName("skill")
  for (i = 0; i <= experience.length; i++)
  {
    document.getElementById("skill").innerHTML = test
  } */





}

function showSkill()
{
  document.getElementById("javaskill").innerHTML = "Java"
  document.getElementById("htmlskill").innerHTML = "HTML"
  document.getElementById("cssskill").innerHTML = "CSS"
  document.getElementById("gitskill").innerHTML = "Git"


  /*var skill = document.getElementByTagName("skill")
  for (i = 0; i <= skill.length; i++)
  {
    document.getElementById("skill").innerHTML = test
  } */

  //document.getElementById("skill").style.color = "red"
  //getElementsByTagName





}
