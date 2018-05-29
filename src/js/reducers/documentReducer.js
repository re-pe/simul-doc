import * as types from '../actions/action-types';

const initialState = {
  documents: [],
};

function documentReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_DOCUMENTS_SUCCESS:
      return {
        ...state,
        documents: {
          ...action.documents,
        },
        loading: false,
      };
    case types.LOAD_DOCUMENTS_ERROR:
      return {
        ...state,
        documentsError: action.error,
        loading: false,
      };
    case types.LOAD_DOCUMENTS:
      return {
        ...state,
        documentsError: undefined,
        loading: true,
      };
    default:
      return state;
  }
}

export default documentReducer;
