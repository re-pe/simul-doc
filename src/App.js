import React from 'react';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import store from './js/store/store';
import { loadUserList} from './js/actions/user-actions';

store.dispatch(loadUserList);

const App = () => (
  <div
    className="appContainer"
  >
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
