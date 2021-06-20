import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import config from "./config/config";

import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import {createFirestoreInstance} from "redux-firestore";
import firebase from "./firebase/firebase";

import {Provider} from "react-redux";
import store from "./redux/store/store";

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider
            firebase={firebase}
            config={config.rrfConfig}
            dispatch={store.dispatch}
            createFirestoreInstance={createFirestoreInstance}
        >
            <App/>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);