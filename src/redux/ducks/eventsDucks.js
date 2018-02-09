// Imports
import axios from 'axios';

// Actions
import { eventsActions } from '../constants/actions';

// Constants
// First const = local environment. Second const = live environment
// const articleURL = 'http://esi.test/wp-json/wp/v2/posts/';
const eventURL = 'http://esportsindustrysa.com/esi/wp-json/wp/v2/posts/';
const initialState = {
    eventData: [],
    eventLoad: true
};

// Reducer
export default function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case eventsActions.eventFetchSuccess : {
            return {
                ...state,
                eventData: action.payload,
                eventLoad: false
            }
        }

        case eventsActions.eventFetchFail : {
            return {
                ...state,
                eventData: []
            }
        }

        default : {
            return state;
        }
    }
}

// Action creators
export function eventFetch(id) {
    const fullURL = `${eventURL}${id}?_embed`;
    return (dispatch) => {
        axios({
            method: 'GET',
            url: fullURL,
            responseType: 'json'
        })
            .then((response) => {
                dispatch({
                    type: eventsActions.eventFetchSuccess,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: eventsActions.eventFetchFail,
                    payload: ''
                });
            });
    };
}
