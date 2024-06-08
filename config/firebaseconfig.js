// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_aynD3zIbDBdlr8NV-9DAli4UESWDLnw",
  authDomain: "crudchico-77304.firebaseapp.com",
  projectId: "crudchico-77304",
  storageBucket: "crudchico-77304.appspot.com",
  messagingSenderId: "991561904801",
  appId: "1:991561904801:web:316779f25ba6cedc0af6e0",
  measurementId: "G-CBNNCRNP1T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
