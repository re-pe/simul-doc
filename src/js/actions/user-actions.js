import usersApi from '../api/usersApi';
import * as types from './action-types';

export function loginSuccess(user) {
  return { type: types.LOGIN_SUCCESS, user };
}

export function loginError(error) {
  return { type: types.LOGIN_ERROR, error };
}

export function login(user) {
  return function dispatchLogin(dispatch) {
    return usersApi
      .login(user)
      .then((result) => {
        dispatch(loginSuccess(result));
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
}
