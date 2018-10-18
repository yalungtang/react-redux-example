import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { START_APP_FULFILLED, START_APP_REJECTED } from './constants';


const app = handleActions({

    [START_APP_FULFILLED]: (state, action) => {
        const { payload: { data } } = action;
        const response = data;
        return {
            response
        };
    },
    [START_APP_REJECTED]: (state, action) => {
        const { error } = action;
        return {
            error
        };
    },
}, { response: "sin valor " });

export const appReducer = combineReducers({
    app
});