import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './js/store/store';
import { loadDocuments } from './js/actions/documents/documents-actions';
import { loadDocument } from './js/actions/documents/document-actions';
// 5b0fd262ee653c5a3db467f2
store.dispatch(loadDocuments());

store.dispatch(loadDocument('5b0fd262ee653c5a3db467f2'));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
