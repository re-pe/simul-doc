import { URL } from '../../js/constants/constants';

const axios = require('axios');

class DocumenstApi {
  static getDocumentList() {
    return axios
      .get(`${URL}/documents`)
      .then(response => response.data);
  }

  static getDocument(id) {
    return axios
      .get(`${URL}/documents/${id}`)
      .then(response => response.data);
  }

  static deleteDocument(id) {
    return axios
      .delete(`${URL}/documents/${id}`)
      .then(response => response.status === 204 && id);
  }
}

export default DocumenstApi;
