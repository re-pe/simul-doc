import * as types from '../actions/action-types';

const initialState = {
  userList: [],
  loadingUserList: false,
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
        ...state,
        user: {
          userData: action.user,
          isLogged: true,
          sendingData: false,
          loginError: undefined,
        },
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        user: {
          sendingData: false,
          loginError: action.error,
        },
      };
    case types.LOGIN:
      return {
        ...state,
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
    case types.LOAD_USER_LIST_SUCCESS:
      return {
        ...state,
        userList: [
          ...action.userList,
        ],
        loadingUserList: false,
      };
    case types.LOAD_USER_LIST_ERROR:
      return {
        ...state,
        userListError: action.error,
        loadingUserList: false,
      };
    case types.LOAD_USER_LIST:
      return {
        ...state,
        userListError: undefined,
        loadingUserList: true,
      };
    default:
      return state;
  }
}

export default usersReducer;
