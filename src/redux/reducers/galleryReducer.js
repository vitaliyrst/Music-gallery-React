import {ENTER_GALLERY} from "../types";

const initialState = {
    enter: false
}

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENTER_GALLERY :
            return {...state, enter: action.payload}
        default :
            return state;
    }
}