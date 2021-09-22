import * as ACTION from "../Actions/constant";

const setLoginState = (loginData) => {
  return {
    type: ACTION.LOGIN_STATE,
    payload: loginData,
  };
};
const setLogoutState = (loginData) => {
  return {
    type: ACTION.LOGOUT_STATE,
    payload: loginData,
  };
};

export { setLoginState, setLogoutState };
