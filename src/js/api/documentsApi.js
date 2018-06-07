import { URL } from '../../js/constants/constants';

const axios = require('axios');

class DocumenstApi {
  static getDocumentList() {
    return axios
      .get(`${URL}/documents`)
      .then(response => response.data)
      .catch((error) => {
        throw error;
      });
  }

  static getDocument(id) {
    return axios
      .get(`${URL}/documents/${id}`)
      .then(response => response.data)
      .catch((error) => {
        throw error;
      });
  }

  static deleteDocument(id) {
    axios
      .delete(`${URL}/documents/${id}`)
      .then(response => response)
      .catch((error) => {
        throw error;
      });
  }
}

export default DocumenstApi;
