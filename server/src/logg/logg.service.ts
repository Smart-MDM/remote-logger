import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LoggServiceBase } from "./base/logg.service.base";

@Injectable()
export class LoggService extends LoggServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
