var landingBackground = document.querySelector("#landing-bg");
// var blueSquare = document.querySelector("#blueSquare");
// var greenPentagon = document.querySelector("#greenPentagon");

function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

window.addEventListener("DOMContentLoaded", scrollLoop, false);
 
var xScrollPosition;
var yScrollPosition;
 
function scrollLoop() {
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;
  setTranslate(0, yScrollPosition * -0.2, landingBackground);
  // setTranslate(0, yScrollPosition * -1.5, blueSquare);
  // setTranslate(0, yScrollPosition * .5, greenPentagon);
  requestAnimationFrame(scrollLoop);
}