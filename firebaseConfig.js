// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";  // Import Firebase Auth

const firebaseConfig = {
    apiKey: "AIzaSyC0sUp9IJILTAV4Qx7AHK6dugESDF5NWHA",
    authDomain: "buspartner-3aa7f.firebaseapp.com",
    databaseURL: "https://buspartner-3aa7f-default-rtdb.firebaseio.com",
    projectId: "buspartner-3aa7f",
    storageBucket: "buspartner-3aa7f.appspot.com",
    messagingSenderId: "482507801367",
    appId: "1:482507801367:web:fd3329c1cc6bac15bbed52",
    measurementId: "G-5J3H0PFV2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);  // Initialize Firebase Auth

export { db, auth };  // Export both Firestore and Auth for use elsewhere
