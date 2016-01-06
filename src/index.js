import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import configureStore from './store';
import App from './containers/App';
import Countries from './components/Countries';
import Error from './components/Error';
import ExpectedError from './components/ExpectedError';
import Home from './components/Home';
import {fetchData} from './actions/actions';

const history = new createBrowserHistory();
const store = configureStore();

function loadData() {
	store.dispatch(fetchData('https://restcountries.eu/rest/v1/all'));
};

//we expect this to fail and get forwarded to the error page
function loadBadData(){
	store.dispatch(fetchData('https://restcountries.eu/rest/v1/callingcode/123123'));
};

ReactDOM.render(
	<Provider store={store}>
		<ReduxRouter>
			<Route history={history}>
				<Route component={App}>
					<Route path='/' component={Home} />
					<Route path='/countries' component={Countries} onEnter={loadData} />
					<Route path='/othercountry' component={ExpectedError} onEnter={loadBadData} />
					<Route path='/error' component={Error} />
				</Route>
			</Route>
		</ReduxRouter>
	</Provider>,
	document.getElementById('root')
);
