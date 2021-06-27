import {FETCH_GROUPS, HIDE_LOADER, SHOW_LOADER} from "../types/types";
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

export const fetchGroups = () => async (dispatch) => {
    try {
        dispatch(hideLoader());
        const response = await database.collection('/groups');
        const data = await response.get();
        const result = [];
        data.docs.forEach(item => result.push(item.data()));
        dispatch({type: FETCH_GROUPS, payload: result[0]});
        dispatch(showLoader());
    } catch (e) {
        console.log('Fetch Groups error', e.message);
        dispatch(hideLoader());
    }
}