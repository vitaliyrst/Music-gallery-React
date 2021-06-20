import firebase from "firebase/app";
import "firebase/firestore";
import config from "../config/config";

try {
    firebase.initializeApp(config.firebase);
    firebase.firestore();
} catch (err) {
    console.log(`Error initializing Firebase - ${err}`);
}

export default firebase;