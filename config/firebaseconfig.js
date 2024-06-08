// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC267d9EsIf-Jj3q8NOe8-AQX2P25DrO70",
  authDomain: "perfectcrud.firebaseapp.com",
  projectId: "perfectcrud",
  storageBucket: "perfectcrud.appspot.com",
  messagingSenderId: "178563042062",
  appId: "1:178563042062:web:d4d9485f7117de982be55f",
  measurementId: "G-REXWX37K4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);