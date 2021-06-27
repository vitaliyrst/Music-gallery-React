import {combineReducers} from "redux";
import {appReducer} from "./app/appReducer";
import {groupsReducer} from "./groups/groupsReducer";

export const rootReducer = combineReducers(
    {
        app: appReducer,
        groups: groupsReducer
    }
);