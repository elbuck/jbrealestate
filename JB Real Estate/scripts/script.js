document.addEventListener('DOMContentLoaded', () => {

// Drop down nav-bar

const dropDownButton = document.querySelector('.nav-drop-down')
const navList = document.querySelector('.drop-down-list')

function toggleButton () {
  navList.classList.toggle('show')
}

dropDownButton.addEventListener('click', toggleButton)

// Hide drop down nav-bar when click outside of it

window.addEventListener('click', function (event) {
  if (event.target != dropDownButton && event.target.parentNode != dropDownButton) {
    navList.classList.remove('show')
  }
});

//Image Slideshow
  const slideIndex = 1;
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
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
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


})