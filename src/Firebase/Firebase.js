import firebase from 'firebase';
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAvc6V7fgZBm9qwldfaJHPocuJn0jEi7hQ",
    authDomain: "hot-onion-kitchen.firebaseapp.com",
    databaseURL: "https://hot-onion-kitchen.firebaseio.com",
    projectId: "hot-onion-kitchen",
    storageBucket: "hot-onion-kitchen.appspot.com",
    messagingSenderId: "588568843878",
    appId: "1:588568843878:web:b7ae840002040e39f37fa7"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

export { db, firebase, storage }; 