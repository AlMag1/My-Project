import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export default combineReducers({
  auth: authReducer
});
