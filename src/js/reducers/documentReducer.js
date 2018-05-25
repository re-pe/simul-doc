import { LOAD_DOCUMENTS_SUCCESS } from '../actions/action-types'



function documentReducer (state={}, action) {
  switch (action.type) {
    case LOAD_DOCUMENTS_SUCCESS:
      return { ...state, test:'changed' }
    default:
      return state
  }
}

export default documentReducer
