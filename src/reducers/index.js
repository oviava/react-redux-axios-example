import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux'; //might need to remove

const initialState = {
  isLoading: false,
  data: [],
  error: false,
};

const exampleReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.RECV_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        data: {},
        error: true,
      });
    case types.RECV_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data,
        error: false,
      });
    case types.REQ_DATA:
      return Object.assign({}, state, { isLoading: true, error: false });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
