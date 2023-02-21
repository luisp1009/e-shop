import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyALKV0KdmkgxpoviJZaugod0q72OPsissM",
  authDomain: "eshop-a6a1d.firebaseapp.com",
  projectId: "eshop-a6a1d",
  storageBucket: "eshop-a6a1d.appspot.com",
  messagingSenderId: "1080317122894",
  appId: "1:1080317122894:web:063c9f3aa407ba5b78e61f",
  measurementId: "G-PEG354H80Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };