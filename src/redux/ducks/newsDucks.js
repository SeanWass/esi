// Imports
import axios from 'axios';

// Actions
import { newsActions } from '../constants/actions';

// Constants
// First const = local environment. Second const = live environment
// const articleURL = 'http://esi.test/wp-json/wp/v2/posts/';
const articleURL = 'http://esportsindustrysa.com/esi/wp-json/wp/v2/posts/';
const initialState = {
    articleData: [],
    articleLoad: true
};

// Reducer
export default function newsReducer(state = initialState, action) {
    switch (action.type) {
        case newsActions.articleFetchSuccess : {
            return {
                ...state,
                articleData: action.payload,
                articleLoad: false
            }
        }

        case newsActions.articleFetchFail : {
            return {
                ...state,
                articleData: []
            }
        }

        default : {
            return state;
        }
    }
}

// Action creators
export function articleFetch(id) {
    const fullURL = `${articleURL}${id}?_embed`;
    return (dispatch) => {
        axios({
            method: 'GET',
            url: fullURL,
            responseType: 'json'
        })
            .then((response) => {
                dispatch({
                    type: newsActions.articleFetchSuccess,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: newsActions.articleFetchFail,
                    payload: ''
                });
            });
    };
}
