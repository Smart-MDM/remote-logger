import { Module } from "@nestjs/common";
import { LoggModuleBase } from "./base/logg.module.base";
import { LoggService } from "./logg.service";
import { LoggController } from "./logg.controller";
import { LoggResolver } from "./logg.resolver";

@Module({
  imports: [LoggModuleBase],
  controllers: [LoggController],
  providers: [LoggService, LoggResolver],
  exports: [LoggService],
})
export class LoggModule {}
