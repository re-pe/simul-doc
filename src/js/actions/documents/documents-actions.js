import documenstApi from '../../api/documentsApi';
import * as types from './../action-types';

export function loadDocumentsSuccess(documents) {
  return { type: types.LOAD_DOCUMENTS_SUCCESS, documents };
}

export function loadDocumentsError(error) {
  return { type: types.LOAD_DOCUMENTS_ERROR, error };
}

export function loadDocuments() {
  return function dispatchLoadDocuments(dispatch) {
    return documenstApi
      .getAllDocuments()
      .then((documents) => {
        dispatch(loadDocumentsSuccess(documents));
      })
      .catch((error) => {
        dispatch(loadDocumentsError(error));
      });
  };
}
