import database from "../../firebase/firebase";
import {
    FETCH_GROUP, FETCH_NEWS, FETCH_POST, HIDE_LOADER,
    SET_CURRENT_PAGE,
    SET_CURRENTS_POSTS_ON_PAGE, SET_OS,
    SHOW_LOADER
} from "../types";


// APP
export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}

export const setOS = (bool) => {
    return {
        type: SET_OS,
        payload : bool
    }
}


// GROUP
export const fetchGroup = () => async (dispatch) => {
    try {
        dispatch(showLoader());
        const response = await database.collection('/groups');
        const data = await response.get();
        const result = [];
        data.docs.forEach(item => result.push(item.data()));
        dispatch({type: FETCH_GROUP, payload: result[0]});
        dispatch(hideLoader());
    } catch (e) {
        console.log('Fetch Group error', e.message);
        dispatch(hideLoader());
    }
}

// NEWS
export const fetchNews = () => async (dispatch) => {
    try {
        dispatch(showLoader());
        const response = await database.collection('/posts').orderBy('id');
        const data = await response.get();
        const result = [];
        data.docs.forEach(item => result.push(item.data()));
        dispatch({type: FETCH_NEWS, payload: result});
        dispatch(hideLoader());
    } catch (e) {
        console.log('Fetch News error', e.message);
        dispatch(hideLoader());
    }
}

export const fetchPost = (id) => async (dispatch) => {
    try {
        dispatch(showLoader());
        const response = await database.collection('/posts').doc(id);
        const data = await response.get();
        let result;
        if (data.exists) {
            result = data.data();
        }
        dispatch({type: FETCH_POST, payload: result});
        dispatch(hideLoader());
    } catch (e) {
        console.log('Fetch Post error', e.message);
        dispatch(hideLoader());
    }
}

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }
}

export const setCurrentPostsOnPage = (posts) => {
    return {
        type: SET_CURRENTS_POSTS_ON_PAGE,
        payload: posts
    }
}