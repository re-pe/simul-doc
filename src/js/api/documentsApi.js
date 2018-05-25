class DocumenstApi {
  static getAllDocuments () {
    return fetch('http://localhost:3000/documents')
      .then(response => {
        return response.json()
      })
      .catch(error => {
        return error
      })
  }
}

export default DocumenstApi
