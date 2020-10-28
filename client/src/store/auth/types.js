import { asyncTypes } from '../helpers';

const TYPES = {
  ...asyncTypes('USER_LOGIN'),
  ...asyncTypes('USER_REGISTER'),

  LOG_OUT: 'LOG_OUT',
  LOAD_USER: 'LOAD_USER'
};

export default TYPES;
