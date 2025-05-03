// select the input elements
const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone');

// Add event listeners to the input elements
firstname.addEventListener('blur', validateFirstname); //blur event is triggered when the input field loses focus
lastname.addEventListener('blur', validateLastname);
email.addEventListener('blur', validateEmail);
phoneNumber.addEventListener('blur', validatePhoneNumber);



// utility function 
function isAlphabet(input) {
   const regex = /^[a-zA-Z]+$/; 
   return regex.test(input);  
}

function checkEmail(value) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(value);
}

function checkPhoneNumber(value) {
  const phoneRegex = /^(?:\+234|0)[789][01]\d{8}$/;
  return phoneRegex.test(value);
}

function checkLength(value) {
   const length = value.length;
    if (length < 3 || length > 20) {
        return false;
    }
    else{
      return true;
    }
}

// Defining the validateInput function
function validateFirstname() {
  const name = firstname.value;
  const isValid = isAlphabet(name) && checkLength(name); 
  if (!isValid) {
    firstname.style.borderColor = 'red';
    firstname.style.borderWidth = '2px';
  }
  else{
    firstname.style.borderColor = ' rgb(194, 194, 194)';
    firstname.style.borderWidth = '0.6px';
  }
}


function validateLastname() {
  const name = lastname.value;
  const isValid = isAlphabet(name) && checkLength(name); 
  if (!isValid) {
    lastname.style.borderColor = 'red';
    lastname.style.borderWidth = '2px';
  }
  else{
    lastname.style.borderColor = ' rgb(194, 194, 194)';
    lastname.style.borderWidth = '0.6px';
  }
}

function validateEmail() {
  const value= email.value;
  const isEmailValid = checkEmail(value);
  if (!isEmailValid) {
    email.style.borderColor = 'red';
    email.style.borderWidth = '2px';
  }
  else{
    email.style.borderColor = ' rgb(194, 194, 194)';
    lastname.style.borderWidth = '0.6px';
  }
}


function validatePhoneNumber() {
  const value = phoneNumber.value;
  const isPhoneValid = checkPhoneNumber(value);
  if (!isPhoneValid) {
    phoneNumber.style.borderColor = 'red';
    phoneNumber.style.borderWidth = '2px';
    
  } else {
    phoneNumber.style.borderColor = ' rgb(194, 194, 194)';
    phoneNumber.style.borderWidth = '0.6px';
  }
}