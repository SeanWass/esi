// Imports
import axios from 'axios';

// Actions
import { splashActions } from '../constants/actions';

// Constants
const splashURL = 'http://esportsindustrysa.com/esi/wp-json/wp/v2/posts/?per_page=2&_embed';
const initialState = {
    splashData: [],
    splashLoad: true
};

// Reducer
export default function splashReducer(state = initialState, action) {
    switch (action.type) {
        case splashActions.splashFetchSuccess : {
            return {
                ...state,
                splashData: action.payload,
                splashLoad: false
            }
        }

        case splashActions.splashFetchFail : {
            return {
                ...state,
                splashData: []
            }
        }

        default : {
            return state;
        }
    }
}

// Action creators
export function splashSlidesFetch(id) {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: splashURL,
            responseType: 'json'
        })
            .then((response) => {
                dispatch({
                    type: splashActions.splashFetchSuccess,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: splashActions.splashFetchFail,
                    payload: ''
                });
            });
    };
}
