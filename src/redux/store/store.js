import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {getFirebase} from "react-redux-firebase";
import {rootReducer} from "../reducers/rootReducer";

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
        compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(
        {getFirebase}
    )),
);

const store = createStore(rootReducer, enhancer);

export default store;