import documenstApi from '../api/documentsApi'
import * as types from './action-types'

export function loadDocuments () {
  return function (dispatch) {
    return documenstApi
      .getAllDocuments()
      .then(documents => {
        dispatch(loadDocumentsSuccess(documents))
      })
      .catch(error => {
        throw error
      })
  }
}

export function loadDocumentsSuccess (documents) {
  return { type: types.LOAD_DOCUMENTS_SUCCESS, documents }
}
