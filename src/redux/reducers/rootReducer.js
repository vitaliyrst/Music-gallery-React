import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import {groupReducer} from "./groupReducer";
import {newsReducer} from "./newsReducer";
import {galleryReducer} from "./galleryReducer";

export const rootReducer = combineReducers(
    {
        app: appReducer,
        sum41: groupReducer,
        news: newsReducer,
        gallery: galleryReducer
    }
);