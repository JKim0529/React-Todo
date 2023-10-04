// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: Api Key,
    authDomain: Auth domain,
    projectId: Project ID,
    storageBucket: Storage Bucket,
    messagingSenderId: Messaaging sender id,
    appId: App id,
    measurementId: Measurement id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
