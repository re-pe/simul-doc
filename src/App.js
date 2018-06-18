import React from 'react';

import Header from './components/header/Header';
import Main from './components/main/Main';

// temporary while playing with sockets
//-------------------------------------------------
import { socket, socketApi } from './js/api/socketApi';

socketApi.login();

socket.on('newConnection', (data) => {
  console.log(data.text);
});
socket.on('lostConnection', (data) => {
  console.log(data.text);
});
//------------------------------------------------
const App = () => (
  <div className="appContainer" >
    <Header />
    <Main />
  </div>
);

export default App;
