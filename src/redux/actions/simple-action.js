
const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });
  return action;
};

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGING_OUT = 'LOGGING_OUT';

export const loggingIn = makeActionCreator(LOGGING_IN, 'status');
export const loggingOut = makeActionCreator(LOGGING_OUT, 'status');

export const CLEAR_ALL_STATES = 'CLEAR_ALL_STATES';
export const clearAllStates = makeActionCreator(CLEAR_ALL_STATES);

export const SET_LOGIN_INFO = 'SET_LOGIN_INFO';
export const setLoginInfo = makeActionCreator(SET_LOGIN_INFO, 'loginInfo');

export const SET_OTP_INFO = 'SET_OTP_INFO';
export const setOtpInfo = makeActionCreator(SET_OTP_INFO, 'otpInfo');

export const SET_RESEND_OTP_END_TIME = 'SET_RESEND_OTP_END_TIME';
export const setResendOtpEndTime = makeActionCreator(SET_RESEND_OTP_END_TIME, 'endTime');

export const CLEAR_LOGIN_INFO = 'CLEAR_LOGIN_INFO';
export const clearLoginInfo = makeActionCreator(CLEAR_LOGIN_INFO, 'loginInfo');

export const SET_LOGIN_USERNAME = 'SET_LOGIN_USERNAME';
export const setLoginUsername = makeActionCreator(SET_LOGIN_USERNAME, 'text');

export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
export const setLoginPassword = makeActionCreator(SET_LOGIN_PASSWORD, 'text');

