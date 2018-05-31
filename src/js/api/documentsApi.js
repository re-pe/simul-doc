import { URL } from '../../js/constants/constants';

const axios = require('axios');

class DocumenstApi {
  static getAllDocuments() {
    return axios
    // Todo: move to constants file
      .get(`${URL}/documents`)
      .then(response => response.data)
      .catch((error) => {
        throw error;
      });
  }
}

export default DocumenstApi;
