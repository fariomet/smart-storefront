// const loginForm = document.getElementById('login-form');

// loginForm.addEventListener('submit', function(event) {
//      event.preventDefault();
//     //  const enteredEmail = document.getElementById('email').value;
//      const enteredPassword = document.getElementById('loginPassword').value;

//     //  const savedEmail = localStorage.getItem('userEmail');
//      const savedPassword = localStorage.getItem('userPassword');

//      if (enteredPassword === savedPassword) {
//         alert('Login successful!');
        
//         // You can redirect to a protected page here
//         window.location.href = 'dashboard.html'; 
//       } else {
//         alert('Invalid email or password. Please try again.');
//       }  


//  window.location.href = 'index.html';
// });

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login successful!");
      console.log("Logged in user:", user);

      // Redirect or take them to your dashboard
      window.location.href = "dashboard.html"; // optional
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
      console.error("Login error:", error.code, error.message);
    });
    window.location.href = 'index.html';
});
