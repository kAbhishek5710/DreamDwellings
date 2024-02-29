// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dreamdwellings-3a3ce.firebaseapp.com",
  projectId: "dreamdwellings-3a3ce",
  storageBucket: "dreamdwellings-3a3ce.appspot.com",
  messagingSenderId: "960828977031",
  appId: "1:960828977031:web:af654d310a5332eda4ed22",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
