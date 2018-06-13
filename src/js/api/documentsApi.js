import axios from 'axios';

import { URL } from '../../js/constants/constants';

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

  static createDocument() {
    // teporary solution to set author and owner of created document
    // as first user we get from request
    return axios
      .get(`${URL}/users`)
      .then(response => (response.data[0]._id))
      .then(result => axios
        .post(`${URL}/documents`, {
          owner: result,
          authors: [result],
          title: 'new Document',
          content: 'empty',
        })
        .then(response => response.data))
      .then(result => result);
  }
}

export default DocumenstApi;
