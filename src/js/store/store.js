import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from '../reducers/mainReducer';

export default createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));
// before connecting redux dev tools
// export default createStore(mainReducer, applyMiddleware(thunk));
