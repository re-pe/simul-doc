import React from 'react';

import Header from './components/header/Header';
import Main from './components/main/Main';

// ---socket--------------------
// import { socket } from './js/api/socketApi';

// socket.on('documentEdited', (data) => {
//   console.log(data.text);
// });
// ---socket--------------------
const App = () => (
  <div className="appContainer" >
    <Header />
    <Main />
  </div>
);

export default App;
