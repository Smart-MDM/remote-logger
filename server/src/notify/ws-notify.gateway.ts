import { WS_MESSAGE, ISocketClient } from './ws-notify.types';
import { Server, Socket } from 'socket.io';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({
  transports: ['websocket'],
  cors: {
    origin: '*',
    allowEIO3: true,
  },
  path: '/websocket',
})
export class WsNotifyGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server | undefined;
  
  private clients: ISocketClient[] = [];

  handleDisconnect(client: Socket) {
    console.log('[socket-new-client-disconnect]: ', client.id);
    this.clients = this.clients.filter(
      (client_: ISocketClient) => client_.client.id === client.id,
    );
  }

  handleConnection(client: Socket) {
    console.log('[socket-new-client-connect]: ', client.id);
    this.clients.push({ client, rooms: ['default'] });
  }

}