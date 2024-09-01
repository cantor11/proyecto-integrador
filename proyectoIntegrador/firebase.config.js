// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXt_rwO5RYQhQGlgEu1h-FfXTaY3Svn-k",
    authDomain: "proyecto-integrador-11.firebaseapp.com",
    projectId: "proyecto-integrador-11",
    storageBucket: "proyecto-integrador-11.appspot.com",
    messagingSenderId: "236921769662",
    appId: "1:236921769662:web:e881c940fc38056b0298ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
// Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);