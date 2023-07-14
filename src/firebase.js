// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIH9lAZyI_ZBvyzkjMqIy23_1wgMU83qA",
    authDomain: "todo-cddfb.firebaseapp.com",
    projectId: "todo-cddfb",
    storageBucket: "todo-cddfb.appspot.com",
    messagingSenderId: "1011026486943",
    appId: "1:1011026486943:web:5254c8ae95b91a275664aa",
    measurementId: "G-MQLVZPXPLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)