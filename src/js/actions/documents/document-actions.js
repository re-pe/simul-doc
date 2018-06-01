import documenstApi from '../../api/documentsApi';
import * as types from './../action-types';

export function loadDocumentSuccess(document) {
  return { type: types.LOAD_DOCUMENT_SUCCESS, document };
}

export function loadDocumentError(error) {
  return { type: types.LOAD_DOCUMENT_ERROR, error };
}

export function loadDocument(id) {
  return function dispatchLoadDocument(dispatch) {
    return documenstApi
      .getDocument(id)
      .then((document) => {
        dispatch(loadDocumentSuccess(document));
      })
      .catch((error) => {
        dispatch(loadDocumentError(error));
      });
  };
}
