import { Module } from "@nestjs/common";
import { LogModuleBase } from "./base/log.module.base";
import { LogService } from "./log.service";
import { LogController } from "./log.controller";
import { LogResolver } from "./log.resolver";

@Module({
  imports: [LogModuleBase],
  controllers: [LogController],
  providers: [LogService, LogResolver],
  exports: [LogService],
})
export class LogModule {}
