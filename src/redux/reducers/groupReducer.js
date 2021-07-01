import {FETCH_GROUP} from "../types";

const initialState = {
    group: {}
}

export const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GROUP :
            return {...state, group: action.payload}
        default :
            return state;
    }
}