import * as types from "../actions/action-types";
import initialState from "./initialState";

function documentReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_DOCUMENTS_SUCCESS:
      console.log(action.documents);  //will remove this after we add components to display those documents in our application
      return action.documents;
    default:
      return state;
  }
}

export default documentReducer;
