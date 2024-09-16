// auth-check.js

// Initialize Firebase Authentication
const auth = firebase.auth();

// Check if user is logged in
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is logged in, proceed to the protected page
        console.log('User is logged in:', user);
    } else {
        // No user is logged in, redirect to login page
        console.log('No user is logged in, redirecting to login page');
        window.location.href = 'login.html'; // Change this to the correct path if needed
    }
});
