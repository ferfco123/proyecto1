// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*import firebase from "fireBase";*/
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDluhQ223K1tHBRhbIFyyokUVk6jlVonyU",
    authDomain: "smartphoneboutique-436c5.firebaseapp.com",
    projectId: "smartphoneboutique-436c5",
    storageBucket: "smartphoneboutique-436c5.appspot.com",
    messagingSenderId: "839160962006",
    appId: "1:839160962006:web:a90c3c54a4ee39a542e277",
   /* measurementId: "G-TYBHDVC9TN"*/
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth
  const db = firebaseApp.firestore();
  export {auth, db}