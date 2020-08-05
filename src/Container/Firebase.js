// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// import firebaseUI from "firebaseui";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJQpD465SYpsP91qreBX2RJ2birzAKze4",
  authDomain: "loop-ppe.firebaseapp.com",
  databaseURL: "https://loop-ppe.firebaseio.com",
  projectId: "loop-ppe",
  storageBucket: "loop-ppe.appspot.com",
  messagingSenderId: "531803646427",
  appId: "1:531803646427:web:eb89b62a069be073c41ffe",
  measurementId: "G-EHXNL78WDH",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();