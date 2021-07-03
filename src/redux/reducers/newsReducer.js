import {FETCH_NEWS, FETCH_POST, SET_CURRENTS_POSTS_ON_PAGE} from "../types";

const initialState = {
    news: [],
    post: {},
    currentPostsOnPage: []
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS :
            return {...state, news: action.payload}
        case FETCH_POST:
            return {...state, post: action.payload}
        case SET_CURRENTS_POSTS_ON_PAGE:
            return {...state, currentPostsOnPage: action.payload}
        default :
            return state;
    }
}