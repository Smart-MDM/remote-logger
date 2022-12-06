import { Log as TLog } from "../api/log/Log";

export const LOG_TITLE_FIELD = "title";

export const LogTitle = (record: TLog): string => {
  return record.title || record.id;
};
