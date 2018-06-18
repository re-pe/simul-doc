// -----socket--------------------------------
import openSocket from 'socket.io-client';

export const socket = openSocket('http://localhost:3000');

export class socketApi {
  static selectDocument(selectedId) {
    socket.emit('documentSelected', { id: selectedId });
  }
}

export default socketApi;
// -----socket--------------------------------
