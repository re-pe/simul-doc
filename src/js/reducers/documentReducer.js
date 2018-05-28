import * as types from '../actions/action-types'

const initialState = {
  documents: []
}

function documentReducer (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_DOCUMENTS_SUCCESS:
      const newState = {
        ...state,
        documents: {
          ...action.documents
        },
        loading: false
      }
      console.log(newState) // will be removed after we add elements to show documents
      return newState
    case types.LOAD_DOCUMENTS_ERROR:
      console.log(action.error) // will be removed after we add elements to show error
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case types.LOAD_DOCUMENTS:
      return {
        ...state,
        error: undefined,
        loading: true
      }
    default:
      return state
  }
}

export default documentReducer
