import * as types from '../actions/action-types';

const initialState = {
  user: undefined,
  isLogged: false,
  loginError: undefined,
  logging: false,
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        user: action.user,
        isLogged: true,
        logging: false,
        loginError: undefined,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        logging: false,
        loginError: action.error,
      };
    case types.LOGIN:
      return {
        ...state,
        logging: true,
        loginError: undefined,
      };
    default:
      return state;
  }
}

export default usersReducer;
