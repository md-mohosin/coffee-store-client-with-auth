// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLe7STxrD0-wHS1lXkdY5775M8kKK8xdI",
    authDomain: "coffee-store-4d203.firebaseapp.com",
    projectId: "coffee-store-4d203",
    storageBucket: "coffee-store-4d203.firebasestorage.app",
    messagingSenderId: "155971816592",
    appId: "1:155971816592:web:f49a6458d3f9c37d7d9c15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)