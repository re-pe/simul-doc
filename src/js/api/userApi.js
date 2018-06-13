import { URL } from '../../js/constants/constants';

const axios = require('axios');

class UserApi {
  static login(email, password) {
    return axios
      .post(`${URL}/login`, {
        email,
        password,
      })
      .then(response => response.data);
  }

  static register(user) {
    return axios
      .post(`${URL}/users`, user)
      .then(response => response.data);
  }
}

export default UserApi;
