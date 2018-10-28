var landingBackground = document.querySelector("#landing-bg");
var navBar = document.querySelector(".topnav");
// var landingTop = document.querySelector(".landing-wrapper");
var fixed = false;
var fixPoint = getDistance();
// var readout = document.getElementById("readout");
// var win = document.defaultView;
var yScrollPosition;

function getDistance() {
  var topDistance = navBar.offsetTop;
  return topDistance;
}

window.onscroll =  function() {
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageYOffset;
  // readout.innerHTML = fixPoint + "   " + distance + "   " + offset + "   " + fixed;
  if ( (distance <= 0) && !fixed) {
    navBar.style.position = "fixed";
    navBar.style.top = "0px";
    fixed = true;
  } else if (fixed && (offset <= fixPoint)){
    navBar.style.position = "relative";
    navBar.style.top = "-29.5vh";
    // navBar.style.top = "-14rem";
    fixed = false;
    
  }
};

function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

window.addEventListener("DOMContentLoaded", scrollLoop, false);

function scrollLoop() {
  yScrollPosition = window.scrollY;
  setTranslate(0, yScrollPosition * -0.2, landingBackground);
  requestAnimationFrame(scrollLoop);
}

