// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOm_U3KBqVefO1rq6M4rveAbs9XUrEBk8",
  authDomain: "auth-development-c5c5a.firebaseapp.com",
  projectId: "auth-development-c5c5a",
  storageBucket: "auth-development-c5c5a.appspot.com",
  messagingSenderId: "748874246728",
  appId: "1:748874246728:web:3e67334370a0b64772c67d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);