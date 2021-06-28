import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import {groupReducer} from "./groupReducer";

export const rootReducer = combineReducers(
    {
        app: appReducer,
        sum41: groupReducer
    }
);