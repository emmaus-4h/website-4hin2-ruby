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

function hideCancelled() {
  let cancelled = document.getElementsByClassName("cancelled");
  for (let i = 0; i < cancelled.length; i++) {
    cancelled[i].style.display = "none";
  document.getElementById("hider").style.display = "none";
  document.getElementById("finder").style.display = "table-row";
    document.getElementById("rising2").setAttribute("rowspan","35");
  
  }
}

function showCancelled() {
  let cancelled = document.getElementsByClassName("cancelled");
  for (let i = 0; i < cancelled.length; i++) {
    cancelled[i].style.display = "table-row";
  document.getElementById("finder").style.display = "none";
  document.getElementById("hider").style.display = "table-row";
  document.getElementById("rising2").setAttribute("rowspan","44");
  }
}
