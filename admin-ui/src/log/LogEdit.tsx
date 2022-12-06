import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const LogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Application" source="application" />
        <TextInput label="Category" source="category" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Device " source="device" />
        <BooleanInput label="Favoris" source="favoris" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
