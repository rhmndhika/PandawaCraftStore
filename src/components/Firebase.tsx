// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth" 

// const firebaseConfig = {
//     apiKey: "AIzaSyAOm_U3KBqVefO1rq6M4rveAbs9XUrEBk8",
//     authDomain: "auth-development-c5c5a.firebaseapp.com",
//     projectId: "auth-development-c5c5a",
//     storageBucket: "auth-development-c5c5a.appspot.com",
//     messagingSenderId: "748874246728",
//     appId: "1:748874246728:web:3e67334370a0b64772c67d"
//   };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// export default app

import firebase from "firebase/app"
import { getAuth } from "firebase/auth" 

const app = firebase.initializeApp({
    apiKey: "AIzaSyAOm_U3KBqVefO1rq6M4rveAbs9XUrEBk8",
    authDomain: "auth-development-c5c5a.firebaseapp.com",
    projectId: "auth-development-c5c5a",
    storageBucket: "auth-development-c5c5a.appspot.com",
    messagingSenderId: "748874246728",
    appId: "1:748874246728:web:3e67334370a0b64772c67d"
})

export const auth = getAuth(app)
export default app