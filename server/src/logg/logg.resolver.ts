import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { LoggResolverBase } from "./base/logg.resolver.base";
import { Logg } from "./base/Logg";
import { LoggService } from "./logg.service";

@graphql.Resolver(() => Logg)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LoggResolver extends LoggResolverBase {
  constructor(
    protected readonly service: LoggService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
