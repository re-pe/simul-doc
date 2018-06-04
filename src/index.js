import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './js/store/store';
import { loadDocument, loadDocumentList } from './js/actions/document-actions';

store.dispatch(loadDocumentList());
// 5b0fd262ee653c5a3db467f2 just for testing
store.dispatch(loadDocument('5b0fd262ee653c5a3db467f2'));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
