import {FETCH_GROUP, GET_BIOGRAPHY, GET_MEMBER, HIDE_LOADER, SHOW_LOADER} from "../types";
import database from "../../firebase/firebase";

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

export const getBiography = () => {
    return {
        type: GET_BIOGRAPHY
    }
}

export const getMember = (id) => {
    return {
        type: GET_MEMBER,
        payload: Number(id)
    }
}