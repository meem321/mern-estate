// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern--estate-42da5.firebaseapp.com",
  projectId: "mern--estate-42da5",
  storageBucket: "mern--estate-42da5.appspot.com",
  messagingSenderId: "108144630264",
  appId: "1:108144630264:web:06c29ca1d86930fc1ade0d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);