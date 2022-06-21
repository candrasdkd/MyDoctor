import {
  loggingIn, setOtpInfo, setResendOtpEndTime, setLoginInfo,
} from '../simple-action';
// import LocalizedString from '../../../localization';
// import { login } from '../../../helper';
// import { NAV_NAME_OTP_LOGIN, timeInSecResendPin } from '../../../constant';
// import NavigationService from '../../../navigation-service';

export default () => async (dispatch) => {
  // if (  undefined || password === undefined) {
  //   throw new Error(LocalizedString.loginScreen.errEmptyUsernamePassword);
  // }

  try {
    dispatch(loggingIn(true));
    dispatch(setOtpInfo('1111'));

    dispatch(setLoginInfo( 'test1', 'test2' ));

    dispatch(setResendOtpEndTime('2020-01-01T00:00:00.000Z'));

    // NavigationService.navigate(NAV_NAME_OTP_LOGIN);
  } finally {
    dispatch(loggingIn(false));
  }
};
