import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from './actionTypes';

export const setAlert = (msg, alertType) => dispatch => {
  const id = uuidv4();
  dispatch({
    type: actionTypes.SET_ALERT,
    payload: { msg, alertType, id }
  });
};
