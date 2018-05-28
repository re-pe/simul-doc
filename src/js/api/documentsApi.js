const axios = require('axios')

class DocumenstApi {
  static getAllDocuments () {
    return axios
      .get('http://localhost:3000/documents')
      .then(response => {
        return response.data
      })
      .catch(error => {
        throw error // i guess i just throw it up to document-actions, where it will be catched and dispatched by dispatch(loadDocumentsError(error))
      })
  }
}

export default DocumenstApi
