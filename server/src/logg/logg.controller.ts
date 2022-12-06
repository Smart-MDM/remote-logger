import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LoggService } from "./logg.service";
import { LoggControllerBase } from "./base/logg.controller.base";

@swagger.ApiTags("loggs")
@common.Controller("loggs")
export class LoggController extends LoggControllerBase {
  constructor(
    protected readonly service: LoggService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
