import { Logg as TLogg } from "../api/logg/Logg";

export const LOGG_TITLE_FIELD = "title";

export const LoggTitle = (record: TLogg): string => {
  return record.title || record.id;
};
