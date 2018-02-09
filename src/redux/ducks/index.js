import { combineReducers } from 'redux';

import eventsReducer from './eventsDucks';
import eventsSummaryReducer from './eventsSummaryDucks';
import newsReducer from './newsDucks';
import newsSummaryReducer from './newsSummaryDucks';
import splashReducer from './splashDucks';
import subscribeReducer from './subscribeDucks';

export default combineReducers({
    eventsSummaryReducer,
    eventsReducer,
    newsReducer,
    newsSummaryReducer,
    splashReducer,
    subscribeReducer
});
