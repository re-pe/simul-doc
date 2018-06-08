import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './js/store/store';
import { loadDocumentList } from './js/actions/document-actions';

store.dispatch(loadDocumentList());

ReactDOM.render(
  <Fragment>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Fragment>,
  document.getElementById('root'),
);
