var landingBackground = document.querySelector("#landing-bg");
var navBar = document.querySelector(".topnav");
// var stickyDiv = "sticky";
// var landingTop = document.querySelector(".landing-wrapper");
var fixed = false;
var fixPoint = getDistance();
// var readout = document.getElementById("readout");
// var win = document.defaultView;
var yScrollPosition;

function getDistance() {
  var topDist = navBar.offsetTop;
  return topDist;
}

window.onscroll = function(e) {
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageYOffset;
  // readout.innerHTML = fixPoint + "   " + distance + "   " + offset + "   " + fixed;
  if ( (distance <= 0) && !fixed) {
    navBar.style.position = "fixed";
    navBar.style.top = "0px";
    fixed = true;
  } else if (fixed && (offset <= fixPoint)){
    navBar.style.position = "relative";
    navBar.style.top = "-25vh";
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

// window.onscroll = function () {
//   console.log("1");
//   if (win.scrollTop() > landingTop.height()) {
//     console.log("hit");
//     yourNavigation.addClass(stickyDiv);
//   } else {
//     yourNavigation.removeClass(stickyDiv);
//     console.log("yo");
//   }
// };