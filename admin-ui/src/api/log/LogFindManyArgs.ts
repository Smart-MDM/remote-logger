import { LogWhereInput } from "./LogWhereInput";
import { LogOrderByInput } from "./LogOrderByInput";

export type LogFindManyArgs = {
  where?: LogWhereInput;
  orderBy?: Array<LogOrderByInput>;
  skip?: number;
  take?: number;
};
