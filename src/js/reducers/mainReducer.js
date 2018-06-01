import { combineReducers } from 'redux';

import documentsReducer from './documentsReducer';
import documentReducer from './documentReducer';

const rootReducer = combineReducers({
  documentsReducer,
  documentReducer,
});

export default rootReducer;
