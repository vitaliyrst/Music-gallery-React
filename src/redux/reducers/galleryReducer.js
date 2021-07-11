import {ENTER_GALLERY, MODELS_LOADING, MODELS_REF} from "../types";

const initialState = {
    enter: false,
    modelsLoading: false,
    modelsRef: []
}

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENTER_GALLERY :
            return {...state, enter: action.payload}
        case MODELS_LOADING:
            return {...state, modelsLoading: action.payload}
        case MODELS_REF:
            return {...state, modelsRef: action.payload}
        default :
            return state;
    }
}
