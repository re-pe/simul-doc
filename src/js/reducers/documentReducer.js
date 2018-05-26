import * as types from '../actions/action-types'
import initialState from './initialState'


function documentReducer (state=initialState, action) {
  switch (action.type) {
    case types.LOAD_DOCUMENTS_SUCCESS:
      return action.documents
    default:
      return state
  }
}

export default documentReducer
