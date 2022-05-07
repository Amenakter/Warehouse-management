// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8Xo46YZx83k_V4PR-l8TTp8O0-kxTxQ8",
    authDomain: "warehouse-management-3d44d.firebaseapp.com",
    projectId: "warehouse-management-3d44d",
    storageBucket: "warehouse-management-3d44d.appspot.com",
    messagingSenderId: "836224868375",
    appId: "1:836224868375:web:90d4f7f01de8ca5b83fc52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
