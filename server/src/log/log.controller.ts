import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LogService } from "./log.service";
import { LogControllerBase } from "./base/log.controller.base";

@swagger.ApiTags("logs")
@common.Controller("logs")
export class LogController extends LogControllerBase {
  constructor(
    protected readonly service: LogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
