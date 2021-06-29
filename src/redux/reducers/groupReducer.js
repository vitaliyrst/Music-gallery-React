import {FETCH_GROUP} from "../types";

const initialState = {
    info: {}
}

export const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GROUP :
            return {...state, info: action.payload}
        default :
            return state;
    }
}