import * as types from './actionTypes';
import axios from 'axios';
import { push } from 'connected-react-router';

function requestData() {
  return { type: types.REQ_DATA };
}

function receiveData(json) {
  return {
    type: types.RECV_DATA,
    data: json,
  };
}

function receiveError(err) {
  return {
    type: types.RECV_ERROR,
    data: err,
  };
}

export function fetchData(url) {
  return function(dispatch) {
    dispatch(requestData());
    return (
      axios({
        url: url,
        timeout: 20000,
        method: 'get',
        // responseType: 'json',
      })
        .then(function(response) {
          dispatch(receiveData(response.data));
        })
        /* 
        https://www.npmjs.com/package/axios#handling-errors 
        only handling non 404 here, better doc in link
        */
        .catch((err) => {
          dispatch(receiveError(err.response));
          dispatch(push('/error', null));
        })
    );
  };
}
