// -----Variables-----
var slides = document.querySelectorAll('.slide');
var rbtn = document.querySelectorAll('.rad-btn');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');
var slideInt; // Store On Going Timer
var intTime = 5000;

// -----Iterate All Radio Navigation Buttons-----
rbtn.forEach(function (item, index) {
  // Click Event for Buttons
  item.addEventListener('click', function () {
    manButtonNav(index);
  });
});

// -----Click Events for Arrows-----
// Right Arrow
rightArrow.addEventListener('click', function (e) {
  e.preventDefault();
  nextSlide();
  clrInterval();
});

// Left Arrow
leftArrow.addEventListener('click', function (e) {
  e.preventDefault();
  prevSlide();
  clrInterval();
});

// -----Function for Radio Navigation-----
function manButtonNav(index) {
  for (var i = 0; i < slides.length; i++) {
    // Set Slide and Radio Navigation Button
    if (i !== index) {
      slides[i].classList.remove('curr');
      rbtn[i].classList.remove('active');
    } else {
      slides[index].classList.add('curr');
      rbtn[index].classList.add('active');
    }
  }
  clrInterval();
}

// -----Function for the Next Slide-----
function nextSlide() {
  var curr = document.querySelector('.curr');
  var active = document.querySelector('.active');
  // Unset Current Slide and Radio Button
  curr.classList.remove('curr');
  active.classList.remove('active');
  // Set Next Slide and Radio Button
  if (curr.nextElementSibling) {
    curr.nextElementSibling.classList.add('curr');
    active.nextElementSibling.classList.add('active');
  } else {
    slides[0].classList.add('curr');
    rbtn[0].classList.add('active');
  }
}

// -----Function for the Previous Slide-----
function prevSlide() {
  var curr = document.querySelector('.curr');
  var active = document.querySelector('.active');
  // Unset Current Slide and Radio Button
  curr.classList.remove('curr');
  active.classList.remove('active');
  // Set Previous Slide and Radio Button
  if (curr.previousElementSibling) {
    curr.previousElementSibling.classList.add('curr');
    active.previousElementSibling.classList.add('active');
  } else {
    slides[slides.length - 1].classList.add('curr');
    rbtn[rbtn.length - 1].classList.add('active');
  }
}

// -----Function for Clear Interval-----
function clrInterval() {
  clearInterval(slideInt);
  slideInt = setInterval(nextSlide, intTime);
}

// -----Automatic Slide Navigation-----
slideInt = setInterval(nextSlide, intTime);

// starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();
