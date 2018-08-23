import { compose, createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(history, initialState) {
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancer(applyMiddleware(routerMiddleware(history), thunkMiddleware))
  );

  return store;
}
