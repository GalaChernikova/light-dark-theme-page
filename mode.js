//light or dark mode
function changeMode() {
    var mode = document.body;
    mode.classList.toggle("dark-mode");
}



//open or hide form on click
var divs = ["sign", "reg"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}



//mobile nav
const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

function toggleMobileNav() {
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');
}

//1. click on button
navBtn.addEventListener('click', function(event){
    event.stopPropagation();
    toggleMobileNav();
})

//2. click on the window beyond navigation
window.addEventListener('click', function(){
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav();
    }
})

//3. stop click inside opened mobile navigation
mobileNav.addEventListener('click', function(event){
    event.stopPropagation();
})