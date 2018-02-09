// Actions
import { subscribeActions } from '../constants/actions';

// Constants
const initialState = {
    emailValue: ''
};

// Reducer
export default function subscribeReducer(state = initialState, action) {
    switch (action.type) {
        case subscribeActions.emailChange : {
            return {
                ...state,
                emailValue: action.payload
            }
        }
        default : {
            return state;
        }
    }
}

// Action creators
export function emailChange(value) {
    return {
        type: subscribeActions.emailChange,
        payload: value
    }
}
