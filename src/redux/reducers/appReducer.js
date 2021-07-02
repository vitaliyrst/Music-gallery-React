import {HIDE_LOADER, SET_OS, SHOW_LOADER} from "../types";

const initialState = {
    loading: true,
    os: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case SET_OS:
            return {...state, os: action.payload}
        default:
            return state
    }
}