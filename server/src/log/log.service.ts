import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LogServiceBase } from "./base/log.service.base";

@Injectable()
export class LogService extends LogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
