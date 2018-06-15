import documentsApi from '../api/documentsApi';
import * as types from './action-types';

export function loadDocumentListSuccess(documentList) {
  return { type: types.LOAD_DOCUMENT_LIST_SUCCESS, documentList };
}

export function loadDocumentListError(error) {
  return { type: types.LOAD_DOCUMENT_LIST_ERROR, error };
}

export function loadDocumentList() {
  return function dispatchLoadDocumentList(dispatch) {
    return documentsApi
      .getDocumentList()
      .then((documents) => {
        dispatch(loadDocumentListSuccess(documents));
      })
      .catch((error) => {
        dispatch(loadDocumentListError(error));
      });
  };
}

export function loadDocumentSuccess(document) {
  return { type: types.LOAD_DOCUMENT_SUCCESS, document };
}

export function loadDocumentError(error) {
  return { type: types.LOAD_DOCUMENT_ERROR, error };
}

export function loadDocument(id) {
  return function dispatchLoadDocument(dispatch) {
    return documentsApi
      .getDocument(id)
      .then((document) => {
        dispatch(loadDocumentSuccess(document));
      })
      .catch((error) => {
        dispatch(loadDocumentError(error));
      });
  };
}

export function deleteDocumentSuccess(id) {
  return { type: types.DELETE_DOCUMENT_SUCCESS, id };
}

export function deleteDocumentError(error) {
  return { type: types.DELETE_DOCUMENT_ERROR, error };
}

export function deleteDocument(id) {
  return function dispatchDeleteDocument(dispatch) {
    return documentsApi
      .deleteDocument(id)
      .then((deletedDocumentId) => {
        dispatch(deleteDocumentSuccess(deletedDocumentId));
      }).catch((error) => {
        dispatch(deleteDocumentError(error));
      });
  };
}

export function createDocumentSuccess(document) {
  return { type: types.CREATE_DOCUMENT_SUCCESS, document };
}

export function createDocumentError(error) {
  return { type: types.CREATE_DOCUMENT_ERROR, error };
}

export function createDocument(ownerId) {
  return function dispatchCreateDocument(dispatch) {
    return documentsApi
      .createDocument(ownerId)
      .then((document) => {
        dispatch(createDocumentSuccess(document));
      })
      .catch((error) => {
        dispatch(createDocumentError(error));
      });
  };
}

export function modifyDocumentSuccess(document) {
  return { type: types.MODIFY_DOCUMENT_SUCCESS, document };
}

export function modifyDocumentError(error) {
  return { type: types.MODIFY_DOCUMENT_ERROR, error };
}

export function modifyDocument(id, data) {
  return function dispatchModifyDocument(dispatch) {
    return documentsApi
      .modifyDocument(id, data)
      .then((document) => {
        dispatch(modifyDocumentSuccess(document));
      })
      .catch((error) => {
        dispatch(modifyDocumentError(error));
      });
  };
}
