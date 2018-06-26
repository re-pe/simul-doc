import * as types from '../actions/action-types';

const initialState = {
  documents: [],
  selectedDocument: undefined,
  loadingList: false,
  loadingDocument: false,
  modifyingDocument: false,
};

function documentReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_DOCUMENT_LIST_SUCCESS:
      return {
        ...state,
        documents: [
          ...action.documentList,
        ],
        loadingList: false,
      };
    case types.LOAD_DOCUMENT_LIST_ERROR:
      return {
        ...state,
        documentsError: action.error,
        loadingList: false,
      };
    case types.LOAD_DOCUMENT_LIST:
      return {
        ...state,
        documentsError: undefined,
        loadingList: true,
      };
    case types.LOAD_DOCUMENT_SUCCESS:
      return {
        ...state,
        selectedDocument: action.document,
        loadingDocument: false,
      };
    case types.LOAD_DOCUMENT_ERROR:
      return {
        ...state,
        documentsError: action.error,
        loadingDocument: false,
      };
    case types.LOAD_DOCUMENT:
      return {
        ...state,
        documentsError: undefined,
        loadingDocument: true,
      };
    case types.DELETE_DOCUMENT_SUCCESS: {
      const newDocs = state.documents.filter(document => document._id !== action.id);
      return {
        ...state,
        documents: [
          ...newDocs,
        ],
        deletingDocument: false,
      };
    }
    case types.DELETE_DOCUMENT_ERROR: {
      return {
        ...state,
        documentsError: action.error,
        deletingDocument: false,
      };
    }
    case types.DELETE_DOCUMENT: {
      return {
        ...state,
        documentsError: undefined,
        deletingDocument: true,
      };
    }
    case types.CREATE_DOCUMENT_SUCCESS:
      return {
        ...state,
        documents: [
          ...state.documents.concat(action.document),
        ],
        selectedDocument: action.document,
        creatingDocument: false,
      };
    case types.CREATE_DOCUMENT_ERROR:
      return {
        ...state,
        documentsError: action.error,
        creatingDocument: false,
      };
    case types.CREATE_DOCUMENT:
      return {
        ...state,
        documentsError: undefined,
        creatingDocument: true,
      };
    case types.MODIFY_DOCUMENT_SUCCESS:
      return {
        ...state,
        selectedDocument: { ...action.document },
        modifyingDocument: false,
      };
    case types.MODIFY_DOCUMENT_ERROR:
      return {
        ...state,
        documentsError: action.error,
        modifyingDocument: false,
      };
    case types.MODIFY_DOCUMENT:
      return {
        ...state,
        documentsError: undefined,
        modifyingDocument: true,
      };
    case types.RESET_DOCUMENTS_STATE:
      return initialState;
    default:
      return state;
  }
}

export default documentReducer;
