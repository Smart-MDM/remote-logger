import { WsNotifyGateway } from './ws-notify.gateway';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('ws')
@ApiTags('Websockets')
export class WsNotifyController {
  constructor(private readonly ws: WsNotifyGateway) {}
}