import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import documentReducer from './documentReducer';
import userReducer from './usersReducer';

const rootReducer = combineReducers({
  documentReducer,
  userReducer,
  form: formReducer,
});

export default rootReducer;
