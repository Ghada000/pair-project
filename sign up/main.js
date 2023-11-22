const signInBtn = document.querySelector('#toggleSignIn');
const signUpBtn = document.querySelector('#toggleSignUp');

const signUpForm = document.querySelector('#sign-up-container');
const signInForm = document.querySelector('#sign-in-container');

// Change form when clicking on button
const changeForm = (form1, form2) => {
  form1.classList.toggle('hide');
  form2.classList.toggle('hide');
}

// Show the Sign In form
signInBtn.addEventListener('click', () => {
  changeForm(signUpForm, signInForm);
  window.location.href="index2.html"
});

// Show the Sign Up form
signUpBtn.addEventListener('click', () => {
  changeForm(signUpForm, signInForm);
});
function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Basic validation
    if (!username || !password) {
      errorMessage.innerHTML = 'Both username and password are required.';
      return;
    }

    // Perform a simple authentication check
    if (username === 'user' && password === 'password') {
      // Authentication successful, you can redirect or perform other actions here
      errorMessage.innerHTML = '';
      alert('Login successful!');
    } else {
      errorMessage.innerHTML = 'Invalid username or password.';
    }
  }


