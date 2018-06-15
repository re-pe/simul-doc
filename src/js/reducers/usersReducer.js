import * as types from '../actions/action-types';

const initialState = {
  user: {
    userData: undefined,
    isLogged: false,
    loginError: undefined,
    sendingData: false,
  },
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        user: {
          userData: action.user,
          isLogged: true,
          sendingData: false,
          loginError: undefined,
        },
      };
    case types.LOGIN_ERROR:
      return {
        user: {
          sendingData: false,
          loginError: action.error,
        },
      };
    case types.LOGIN:
      return {
        user: {
          sendingData: true,
          loginError: undefined,
        },
      };
    case types.LOGOUT_SUCCESS:
      return initialState;
    case types.LOGOUT_ERROR:
      return {
        user: {
          sendingData: false,
          logoutError: action.error,
        },
      };
    case types.LOGOUT:
      return {
        user: {
          sendingData: true,
          logoutError: undefined,
        },
      };
    default:
      return state;
  }
}

export default usersReducer;
