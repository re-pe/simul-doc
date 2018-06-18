// temporary while playing with sockets
//-------------------------------------------------
import openSocket from 'socket.io-client';

export const socket = openSocket('http://localhost:3000');

export class socketApi {
  static login() {
    socket.emit('login', 'Aurimas');
  }
}

export default socketApi;
//-------------------------------------------------
