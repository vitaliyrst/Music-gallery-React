import {FETCH_GROUP, GET_BIOGRAPHY, GET_MEMBER} from "../types";

const initialState = {
    info: {},
    biography: [],
    member: []
}

export const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GROUP :
            return {...state, info: action.payload}
        case GET_BIOGRAPHY :
            return {...state, biography: state.info.biography}
        case GET_MEMBER :
            return {...state, member: state.info.biography.find(member => member.id === action.payload)}
        default :
            return state;
    }
}