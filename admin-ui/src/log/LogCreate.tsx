import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const LogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Application" source="application" />
        <TextInput label="Category" source="category" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Device " source="device" />
        <BooleanInput label="Favoris" source="favoris" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
