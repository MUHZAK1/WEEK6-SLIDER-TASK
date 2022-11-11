let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var container = document.getElementById("container");
var previousBtn = document.getElementById("prevbtn");
var nextBtn = document.getElementById("nextbtn");

// set visibillity buttons to invisible by default
previousBtn.setAttribute("style", "visibility:hidden;")
nextBtn.setAttribute("style", "visibility:hidden;")


container.addEventListener("mouseover", showNextButtons, false);
container.addEventListener("mouseout", hideNextButtons, false);

function showNextButtons(){  

   nextBtn.setAttribute("style", "visibility:visible;")
   previousBtn.setAttribute("style", "visibility:visible;")
}

function hideNextButtons(){  
  previousBtn.setAttribute("style", "visibility:hidden;")
  nextBtn.setAttribute("style", "visibility:hidden;")
}