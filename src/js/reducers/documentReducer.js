import * as types from '../actions/action-types';

const initialState = {
  documents: [],
  selected: undefined,
  // splited loading into 2 variables, not sure about this
  // maybe i should keep one just to inform user that system doing some magic behind scenes
  loadingList: false,
  loadingDocument: false,
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
        selected: action.document,
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
    default:
      return state;
  }
}

export default documentReducer;
