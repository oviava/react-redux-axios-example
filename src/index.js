import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import configureStore from './store';
import App from './containers/App';
import Countries from './components/Countries';
import Error from './components/Error';
import ExpectedError from './components/ExpectedError';
import Home from './components/Home';
import { fetchData } from './actions/actions';

const history = createBrowserHistory();

const store = configureStore(history, {});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/countries" component={Countries} />
          <Route path="/othercountry" component={ExpectedError} />
          <Route path="/error" component={Error} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
