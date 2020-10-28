import axios from 'axios';
import TYPES from './types';

export const loadUser = () => dispatch => {
  dispatch({ type: TYPES.LOAD_USER });
};

export const login = params => dispatch => {
  dispatch({ type: TYPES.USER_LOGIN.START });

  return axios
    .post('/api/users/login', params)
    .then(response => {
      dispatch({ type: TYPES.USER_LOGIN.SUCCESS, payload: response.data });
      return response.data;
    })
    .catch(error => {
      dispatch({ type: TYPES.USER_LOGIN.ERROR, payload: error });
      throw error;
    });
};

export const logout = () => dispatch => {
  dispatch({ type: TYPES.LOG_OUT });
};
