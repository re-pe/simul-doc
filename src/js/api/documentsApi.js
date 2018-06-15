import axios from 'axios';

import { URL } from '../../js/constants/constants';

// axios.defaults.withCredentials = true;

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

  static createDocument(ownerId) {
    return axios
      .post(`${URL}/documents`, {
        owner: ownerId,
        authors: [ownerId],
        title: 'new Document',
        content: 'empty',
      })
      .then(response => response.data);
  }

  static modifyDocument(id, data) {
    // return Promise.resolve(data);
    return axios
      .put(
        `${URL}/documents/${id}`,
        data,
      )
      .then(response => response.data);
  }
}

export default DocumenstApi;
