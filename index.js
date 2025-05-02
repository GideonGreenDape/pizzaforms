// select the input elements
const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');
const email = document.getElementById('email');

// Add event listeners to the input elements
firstname.addEventListener('blur', validateFirstname); //blur event is triggered when the input field loses focus
lastname.addEventListener('blur', validateLastname);
email.addEventListener('blur', validateEmail);



// utility function 
function isAlphabet(input) {
   const regex = /^[a-zA-Z]+$/; 
   console.log(regex.test(input));
     
   return regex.test(input);  
}

function checkEmail(value) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+ \.[a-zA-Z]{2,}$ /;
  return emailRegex.test(value);
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
}


function validateLastname() {
  const name = lastname.value;
  const isValid = isAlphabet(name) && checkLength(name); 
  if (!isValid) {
    lastname.style.borderColor = 'red';
    lastname.style.borderWidth = '2px';
  }
}

function validateEmail() {
  const value= email.value;
  const isEmailValid = checkEmail(value);
  if (!isEmailValid) {
    email.style.borderColor = 'red';
    email.style.borderWidth = '2px';
  }
}