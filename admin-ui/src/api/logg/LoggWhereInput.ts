import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LoggWhereInput = {
  application?: StringNullableFilter;
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  device?: StringNullableFilter;
  favoris?: BooleanNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
