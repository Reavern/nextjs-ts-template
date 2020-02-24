import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

// Config
const config = {
    apiKey: "AIzaSyD4RzMhc_1p2JoQJQJkHupDVDYqxvUTyCM",
    authDomain: "midtrans-testing.firebaseapp.com",
    databaseURL: "https://midtrans-testing.firebaseio.com",
    projectId: "midtrans-testing",
    storageBucket: "midtrans-testing.appspot.com",
    messagingSenderId: "940556024401",
    appId: "1:940556024401:web:381d34b1526f31b43f9670",
    measurementId: "G-QL80JYFCDC"
};

let firebaseApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
let secondaryApp = firebase.apps.length < 2 ?firebase.initializeApp(config, "Secondary") : firebase.app("Secondary");

export { firebaseApp, secondaryApp };