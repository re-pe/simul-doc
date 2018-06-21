import openSocket from 'socket.io-client';

import { URL } from '../constants/constants';

export const socket = openSocket(URL);

export class socketApi {
  static joinRoom(id) {
    socket.emit('joinedRoom', { id });
  }

  static editDocument(id, content) {
    socket.emit('documentEdited', { id, content });
  }
}

export function subscribeToEditorChange(cb) {
  socket.on('documentEdited', data => cb(data.text));
}

export default socketApi;
