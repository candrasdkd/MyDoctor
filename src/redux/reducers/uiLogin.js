import {
  LOGGING_IN, SET_LOGIN_INFO, CLEAR_LOGIN_INFO, SET_LOGIN_USERNAME, SET_LOGIN_PASSWORD,
} from '../actions';

const initialState = {
  loggingIn: false,
  info: {},
  username: '',
  password: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return { ...state, loggingIn: action.status };
    case SET_LOGIN_INFO:
      return { ...state, info: action.loginInfo };
    case CLEAR_LOGIN_INFO:
      return { ...state, info: initialState.info };
    case SET_LOGIN_USERNAME:
      return { ...state, username: action.text };
    case SET_LOGIN_PASSWORD:
      return { ...state, password: action.text };

    default: return state;
  }
};
