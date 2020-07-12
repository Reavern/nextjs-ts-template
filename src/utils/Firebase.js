import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

// Config
const config = {

};

let firebaseApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
let secondaryApp = firebase.apps.length < 2 ?firebase.initializeApp(config, "Secondary") : firebase.app("Secondary");

export { firebaseApp, secondaryApp };