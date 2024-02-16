import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMIY5z7Fg2_-Jw6bBJyyTLK-AO7cMBums",
  authDomain: "coderhouse-49970.firebaseapp.com",
  projectId: "coderhouse-49970",
  storageBucket: "coderhouse-49970.appspot.com",
  messagingSenderId: "773843496318",
  appId: "1:773843496318:web:656c1ba8832f8eb098d72f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
