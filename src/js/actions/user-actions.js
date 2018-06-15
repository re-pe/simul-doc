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
      .then(result => dispatch(loginSuccess(result)))
      .catch(error => dispatch(loginError(error.response)));
  };
}

export function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS };
}

export function logoutError(error) {
  return { type: types.LOGOUT_ERROR, error };
}

export function logout() {
  return function dispatchLogout(dispatch) {
    return usersApi
      .logout()
      .then(() => dispatch(logoutSuccess()))
      .catch(error => dispatch(logoutError(error)));
  };
}
