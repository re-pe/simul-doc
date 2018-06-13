import axios from 'axios';

import { URL } from '../../js/constants/constants';

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
}

export default UserApi;
