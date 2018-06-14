import * as types from '../actions/action-types';

const initialState = {
  user: {
    userData: undefined,
    isLogged: false,
    loginError: undefined,
    logging: false,
  },
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        user: {
          userData: action.user,
          isLogged: true,
          logging: false,
          loginError: undefined,
        },
      };
    case types.LOGIN_ERROR:
      return {
        user: {
          logging: false,
          loginError: action.error,
        },
      };
    case types.LOGIN:
      return {
        user: {
          logging: true,
          loginError: undefined,
        },
      };
    default:
      return state;
  }
}

export default usersReducer;
