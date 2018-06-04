import { combineReducers } from 'redux';

import documentReducer from './documentReducer';

const rootReducer = combineReducers({
  documentReducer,
});

export default rootReducer;
