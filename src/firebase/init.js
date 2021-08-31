// import firebase from "firebase/app";
// import "firebase/firestore";

// // Your web app's Firebase configuration
// const app = firebase.initializeApp({
//   apiKey: "AIzaSyA7GjOV4pZXPGVuVeJumDuysFq8A7os6TU",
//   authDomain: "vue-firebase-chat-79d61.firebaseapp.com",
//   projectId: "vue-firebase-chat-79d61",
//   storageBucket: "vue-firebase-chat-79d61.appspot.com",
//   messagingSenderId: "988065682637",
//   appId: "1:988065682637:web:e6b68397cd116185568584",
// });

// app.firestore().settings({ timestampsInSnapshots: true });

// const db = app.firestore();

// export default db;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7GjOV4pZXPGVuVeJumDuysFq8A7os6TU",
  authDomain: "vue-firebase-chat-79d61.firebaseapp.com",
  projectId: "vue-firebase-chat-79d61",
  storageBucket: "vue-firebase-chat-79d61.appspot.com",
  messagingSenderId: "988065682637",
  appId: "1:988065682637:web:e6b68397cd116185568584",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

console.log("firebase app initialized" + app);
export default db;
