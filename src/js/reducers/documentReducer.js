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
          ...state.documents.concat(...action.documents) // not sure here should i concat or overide documents
        }
      }
      console.log(newState) // will be removed after we add elements to show documents
      return newState
    case types.LOAD_DOCUMENTS_ERROR:
      console.log(action.error) // not sure what we will do here, i guess make object for error i nstate and show it in some element for eerors?
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default documentReducer
