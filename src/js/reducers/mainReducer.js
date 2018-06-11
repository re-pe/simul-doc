import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import documentReducer from './documentReducer';

const rootReducer = combineReducers({
  documentReducer,
  form: formReducer,
});

export default rootReducer;
