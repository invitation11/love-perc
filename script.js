import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBJbvDfsEjhxxUqsLcfM8zERHKE5Iylcvg",
    authDomain: "love-percent-data.firebaseapp.com",
    projectId: "love-percent-data",
    storageBucket: "love-percent-data.firebasestorage.app",
    messagingSenderId: "457346939481",
    appId: "1:457346939481:web:5c3c99d2621d84607c4f48",
    measurementId: "G-V8S2YB9F60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Form submit
document.getElementById("myform").addEventListener("submit", function(e) {
    e.preventDefault();

    const yourName = document.getElementById("yourName").value;
    const crushName = document.getElementById("crushName").value;

    let percent = Math.floor(Math.random() * 100);

    document.getElementById("output").innerHTML = percent + "% 💕";

    // Save to Firebase
    push(ref(db, "loveData"), {
        yourName: yourName,
        crushName: crushName,
        percentage: percent,
        time: new Date().toLocaleString()
    });

});