import {ENTER_GALLERY, MODELS_LOADING} from "../types";

const initialState = {
    enter: false,
    modelsLoading: false
}

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENTER_GALLERY :
            return {...state, enter: action.payload}
        case MODELS_LOADING:
            return {...state, modelsLoading: action.payload}
        default :
            return state;
    }
}
