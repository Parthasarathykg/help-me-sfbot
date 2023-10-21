import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import logger from './middlewares/logger';

import sobjects from './modules/sobjects/reducers';
import sobject from './modules/sobject/reducers';
import query from './modules/query/reducers';
import ui from './modules/ui/reducers';

let middlewares = [thunk];
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, logger];
}

export const store = createStore(
    combineReducers({
        sobjects,
        sobject,
        query,
        ui
    }),
    applyMiddleware(...middlewares)
);
