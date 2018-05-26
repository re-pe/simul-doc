const axios = require('axios')

class DocumenstApi {
  static getAllDocuments() {
    return axios
      .get("http://localhost:3000/documents")
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
}

export default DocumenstApi;
