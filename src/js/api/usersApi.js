import axios from 'axios';

import { URL } from '../../js/constants/constants';

axios.defaults.withCredentials = true;

class UserApi {
  static login(user) {
    return axios
      .post(`${URL}/login`, user)
      .then(response => response.data);
  }

  static register(user) {
    return axios
      .post(`${URL}/users`, user)
      .then(response => response.data);
  }

  static logout() {
    return axios
      .post(`${URL}/logout`)
      .then(response => response.data);
  }

  static getUserList() {
    console.log("loadUserList");
    return axios
      .get(`${URL}/users`)
      .then(response => response.data);
  }
}

export default UserApi;
