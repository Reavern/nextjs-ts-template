import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

let config = {
    apiKey: "AIzaSyAX-roJr9zq9M8YLpUW2fLxEiXBT25QChA",
    authDomain: "paperie-lab.firebaseapp.com",
    databaseURL: "https://paperie-lab.firebaseio.com",
    projectId: "paperie-lab",
    storageBucket: "paperie-lab.appspot.com",
    messagingSenderId: "995014915018",
    appId: "1:995014915018:web:725f302fff8466b7cd1533",
    measurementId: "G-6JKPD935JC"
};

let firebaseApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
// let secondaryApp = firebase.initializeApp(config, "Secondary");

// export { firebaseApp, secondaryApp };
export { firebaseApp };

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebaseApp.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
}