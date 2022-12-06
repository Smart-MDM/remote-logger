import { LoggWhereInput } from "./LoggWhereInput";
import { LoggOrderByInput } from "./LoggOrderByInput";

export type LoggFindManyArgs = {
  where?: LoggWhereInput;
  orderBy?: Array<LoggOrderByInput>;
  skip?: number;
  take?: number;
};
