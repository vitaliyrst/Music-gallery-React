import database from "../firebase/firebase";
import {
    ENTER_GALLERY,
    FETCH_GROUP, FETCH_NEWS, FETCH_POST, HIDE_LOADER, MODELS_LOADING, MODELS_REF,
    SET_CURRENTS_POSTS_ON_PAGE, SET_OS,
    SHOW_LOADER
} from "./types";


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
        payload: bool
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

export const fetchPost = (title) => async (dispatch) => {
    try {
        dispatch(showLoader());
        const response = await database.collection('/posts').where('title', '==', title);
        const data = await response.get();
        const result = [];

        data.docs.forEach(item => {
            result.push(item.data());
        });

        dispatch({type: FETCH_POST, payload: result[0]});
        dispatch(hideLoader());
    } catch (e) {
        console.log('Fetch Post error', e.message);
        dispatch(hideLoader());
    }
}

export const setCurrentPostsOnPage = (posts) => {
    return {
        type: SET_CURRENTS_POSTS_ON_PAGE,
        payload: posts
    }
}

//GALLERY

export const setEnter = (state) => {
    return {
        type: ENTER_GALLERY,
        payload: state
    }
}

export const setModelsLoading = (state) => {
    return {
        type: MODELS_LOADING,
        payload: state
    }
}

export const setModelsRef = (state) => {
    return {
        type: MODELS_REF,
        payload: state
    }
}
