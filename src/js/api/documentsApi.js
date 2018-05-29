const axios = require('axios');

class DocumenstApi {
  static getAllDocuments() {
    return axios
      .get('http://localhost:3000/documents')
      .then(response => response.data)
      .catch((error) => {
        throw error;
      });
  }
}

export default DocumenstApi;
