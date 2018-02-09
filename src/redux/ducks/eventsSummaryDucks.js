// Imports
import axios from 'axios';

// Actions
import { eventsSummaryActions } from '../constants/actions';

// Constants
// Events id = 6
// First constant = local environment. Second constant = live environment
// const eventsURL = 'http://esi.test/wp-json/wp/v2/posts/?_embed&categories=6'
const eventsURL = 'http://esportsindustrysa.com/esi/wp-json/wp/v2/posts/?_embed&categories=6'
const initialState = {
    eventsData: []
};

// Reducer
export default function eventsSummaryReducer(state = initialState, action) {
    switch (action.type) {
        case eventsSummaryActions.eventsFetchSuccess : {
            return {
                ...state,
                eventsData: action.payload
            }
        }

        case eventsSummaryActions.eventsFetchFail : {
            return {
                ...state,
                eventsData: action.payload
            }
        }

        default : {
            return state;
        }
    }
}

// Action creators
export function eventsFetch() {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: eventsURL,
            responseType: 'json'
        })
            .then((response) => {
                dispatch({
                    type: eventsSummaryActions.eventsFetchSuccess,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: eventsSummaryActions.eventsFetchFail,
                    payload: ''
                });
            });
    };
}
