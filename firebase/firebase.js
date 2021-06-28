import firebase from "firebase/app";
import "firebase/firestore";
import config from "../config/config";

let database;

try {
    firebase.initializeApp(config.firebase);
    database = new firebase.firestore();
} catch (err) {
    console.log(`Error initializing Firebase - ${err}`);
}

export default database;