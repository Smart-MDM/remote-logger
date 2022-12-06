import { SortOrder } from "../../util/SortOrder";

export type LogOrderByInput = {
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
