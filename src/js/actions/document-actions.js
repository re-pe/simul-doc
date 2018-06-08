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

export function deleteDocumentSuccess(document) {
  return { type: types.DELETE_DOCUMENT_SUCCESS, document };
}

export function deleteDocumentError(error) {
  return { type: types.DELETE_DOCUMENT_ERROR, error };
}

// export function deleteDocument(id) {
//   return function dispatchDeleteDocument(dispatch) {
//     return documentsApi
//       .deleteDocument(id)
//       .then((document) => {
//         console.log(document);
//         //dispatch(deleteDocumentSuccess(document.id));
//       }).catch((error) => {
//         dispatch(deleteDocumentError(error));
//       });
//   };
// }

export function deleteDocument(id) {
  return function dispatchDeleteDocument(dispatch) {
    return documentsApi
      .deleteDocument(id)
      .then(() => {
        console.log('deleted');
      });
  };
}
