import { post } from 'utils/api';
import TYPES from './types';

export const loadUser = () => dispatch => {
  dispatch({ type: TYPES.LOAD_USER });
};

export const register = params => dispatch => {
  dispatch({ type: TYPES.USER_REGISTER.START });

  return post('/api/users/register', params)
    .then(response => {
      dispatch({ type: TYPES.USER_REGISTER.SUCCESS, payload: response.data });
      return response.data;
    })
    .catch(error => {
      dispatch({ type: TYPES.USER_REGISTER.ERROR, payload: error });
      throw error;
    });
};

export const login = params => dispatch => {
  dispatch({ type: TYPES.USER_LOGIN.START });

  return post('api/users/login', params)
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
