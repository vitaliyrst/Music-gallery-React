import {FETCH_NEWS, SET_CURRENT_PAGE, SET_CURRENTS_POSTS_ON_PAGE} from "../types";

const initialState = {
    news: {},
    currentPage: 1,
    currentPostsOnPage: []
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS :
            return {...state, news: action.payload}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case SET_CURRENTS_POSTS_ON_PAGE:
            return {...state, currentPostsOnPage: action.payload}
        default :
            return state;
    }
}