import { SortOrder } from "../../util/SortOrder";

export type LoggOrderByInput = {
  application?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  device?: SortOrder;
  favoris?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
