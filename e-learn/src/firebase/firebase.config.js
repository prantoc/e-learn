// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcqGvCpVUxjIcfOUHLbWYur2oxV3zj-8Q",
    authDomain: "e-learn-bad16.firebaseapp.com",
    projectId: "e-learn-bad16",
    storageBucket: "e-learn-bad16.appspot.com",
    messagingSenderId: "355056568826",
    appId: "1:355056568826:web:9bcee1577bb252814c3c43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;