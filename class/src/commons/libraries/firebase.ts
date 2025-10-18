// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiTtpJRFl1DPDTEkq5RE5dWiiNW8YWxjM",
  authDomain: "codecamp-fe-1a1e3.firebaseapp.com",
  projectId: "codecamp-fe-1a1e3",
  storageBucket: "codecamp-fe-1a1e3.firebasestorage.app",
  messagingSenderId: "663358548431",
  appId: "1:663358548431:web:5b0b26e4fd00fbee11caba",
  measurementId: "G-D0KXN2HRVY",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
