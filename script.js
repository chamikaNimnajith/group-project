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

//sign up login form validate

function showMessage(input, message, type) {
  const msg = input.nextElementSibling.querySelector('small');
  msg.innerText = message;

  //input.className = type ? "success" : "error";
  // input.focus()
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}
function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }

  return showSuccess(input);
}

function password(input, message, invalidMsg) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  if (0 < input.value.length && input.value.length < 8) {
    return showError(input, invalidMsg);
  }

  return showSuccess(input);
}

function passwordc(input2, input, message, invalidMsg) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  if (input2.value !== input.value) {
    return showError(input, invalidMsg);
  }

  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  const emailRegX = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  const email = input.value.trim();
  if (!emailRegX.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const NAME_REQUIRED = 'please enter the user name';
const EMAIL_REQUIRED = ' enter your email';
const EMAIL_INVALID = 'please enter a correct email address format ';
const PASSWORD_REQUIRED = ' enter the password';
const PASSWORD_REQUIREDC = ' confirm the password';
const PASSWORD_REQUIREDC8 = 'minimal 8 characters need';
const PASSWORD_REQUIREDC8M = 'its not match with first one';

const form = document.querySelector('#SIGNUP');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  let nameValid = hasValue(form.elements['USERNAME'], NAME_REQUIRED);
  let emailValid = validateEmail(
    form.elements['EMAIL'],
    EMAIL_REQUIRED,
    EMAIL_INVALID
  );
  let passwordValid = password(
    form.elements['PASSWORD'],
    PASSWORD_REQUIRED,
    PASSWORD_REQUIREDC8
  );
  let passwordValidc = passwordc(
    form.elements['PASSWORD'],
    form.elements['PASSWORDC'],
    PASSWORD_REQUIREDC,
    PASSWORD_REQUIREDC8M
  );

  if (nameValid && emailValid && passwordValid && passwordValidc) {
    alert('හරිනෙ දැක්කනේ. මේකට php ලියල නෑ. ඒකහින්ද දැන් ඔක cut කරල දාන්න😂😂');
    form.reset();
  }
});

