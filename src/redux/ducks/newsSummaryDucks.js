// Imports
import axios from 'axios';

// Actions
import { newsSummaryActions } from '../constants/actions';

// Constants
// news id = 7
// First const is for the local server. Second is for the live api.
// const newsURL = 'http://esi.test/wp-json/wp/v2/posts/?_embed&categories=7'
const newsURL = 'http://esportsindustrysa.com/esi/wp-json/wp/v2/posts/?_embed&categories=7&per_page=6&status=publish';
const initialState = {
    newsData: []
};

// Reducer
export default function newsSummaryReducer(state = initialState, action) {
    switch (action.type) {
        case newsSummaryActions.newsFetchSuccess : {
            return {
                ...state,
                newsData: action.payload
            }
        }

        case newsSummaryActions.newsFetchFail : {
            return {
                ...state,
                newsData: action.payload
            }
        }

        default : {
            return state;
        }
    }
}

// Action creators
export function newsFetch() {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: newsURL,
            responseType: 'json'
        })
            .then((response) => {
                dispatch({
                    type: newsSummaryActions.newsFetchSuccess,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: newsSummaryActions.newsFetchFail,
                    payload: ''
                });
            });
    };
}
