import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3ZsDciuD2KsQnY7YrNZjmGlHvo5-2QHY",
  authDomain: "twitter-clone-e9b7e.firebaseapp.com",
  projectId: "twitter-clone-e9b7e",
  storageBucket: "twitter-clone-e9b7e.appspot.com",
  messagingSenderId: "997135989318",
  appId: "1:997135989318:web:9fb8fa19144e989517a847",
  measurementId: "G-7QC801DREV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
