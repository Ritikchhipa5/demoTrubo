import * as ACTION from "../Actions/constant";

const initialState = {
  isLoggedIn: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.LOGIN_STATE:
      return {
        ...state,
        isLoggedIn: true,
      };
    case ACTION.LOGOUT_STATE:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
