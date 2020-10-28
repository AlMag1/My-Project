import TYPES from './types';

const INITIAL_STATE = {
  user: null,
  isAuthenticated: false,
  loading: false
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TYPES.USER_LOGIN.SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        user: payload,
        isAuthenticated: true
      };

    case TYPES.LOAD_USER:
      const token = localStorage.getItem('token');
      return {
        ...state,
        isAuthenticated: token ? true : false
      };

    case TYPES.LOG_OUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };

    default:
      return {
        ...state
      };
  }
};

export default reducer;
