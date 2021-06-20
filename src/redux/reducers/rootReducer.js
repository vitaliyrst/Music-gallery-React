import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import {appReducer} from "./app/appReducer";

export const rootReducer = combineReducers(
    {
        firebase: firebaseReducer,
        firestore: firestoreReducer,
        app: appReducer
    }
);