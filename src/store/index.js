import {compose, createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

import { routerStateReducer, reduxReactRouter } from 'redux-react-router';

import createHistory from 'history/lib/createBrowserHistory';

const createAppStore = compose(
	applyMiddleware(thunkMiddleware),
	reduxReactRouter({createHistory})
)(createStore);

export default function configureStore(initialState){
	const store = createAppStore(rootReducer, initialState);

	return store;
};