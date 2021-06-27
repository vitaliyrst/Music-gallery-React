import {FETCH_GROUPS} from "../../types/types";

const initialState = {
    groups: {}
}

export const groupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GROUPS :
            return {...state, groups: action.payload}
        default :
            return state;
    }
}