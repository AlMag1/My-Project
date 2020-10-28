import { asyncTypes } from '../helpers';

const TYPES = {
  ...asyncTypes('USER_LOGIN'),

  LOG_OUT: 'LOG_OUT',
  LOAD_USER: 'LOAD_USER'
};

export default TYPES;
