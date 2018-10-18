import { createActions } from 'redux-actions';
import { START_APP } from './constants';
import { callApi } from './services';

export const { startApp } = createActions(START_APP);

export const dispatchStartApp = (route) => {
    console.log(route);
    return dispatch => dispatch(startApp(callApi(route)))
};