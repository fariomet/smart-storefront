// signup.js

// First, select the form element
// const signupForm = document.getElementById('signup-form');

// // Listen for the form submission
// signupForm.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the page from refreshing
 
//   // Get the values entered by the user
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   // Save the email and password in localStorage
//   localStorage.setItem('userName', name);
//   localStorage.setItem('userEmail', email);
//   localStorage.setItem('userPassword', password);

//   // Alert the user
//   alert('Signup successful! You can now log in.');

//   // Redirect them to the login page
//   window.location.href = 'login.html';
// });


// Reference to the form
const signupForm = document.getElementById("signup-form");

// Handle form submission
signupForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  // Get user input
  // const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Firebase signup method
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      return user.updateProfile({
        displayName: name
      }).then(() => {
      alert("Account created successfully!");
      console.log("New user:", user);
      });
    })
    .catch((error) => {
      alert("Error: " + error.message);
      console.error("Signup error:", error.code, error.message);
    });

    // Redirect them to the login page
 window.location.href = 'login.html';
});
