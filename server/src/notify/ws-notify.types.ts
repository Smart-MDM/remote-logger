import { Socket } from 'socket.io';
export enum WS_MESSAGE {
  JOIN_ROOM = 'join-room',
}

export interface ISocketClient {
  client: Socket;
  rooms: string[];
}

export enum WS_EVENTS {
  TPE_STATUS_CHANGED = 'TPE_STATUS_CHANGED',
}