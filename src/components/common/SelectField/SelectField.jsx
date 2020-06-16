import React from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import { fieldToTextField } from "formik-material-ui";

const SelectField = ({ textFieldProps, options, ...props }) => {
  const {
    form: { setTouched, setFieldValue },
  } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;
  console.log(fieldToTextField(props));
  return (
    <Autocomplete
      {...props}
      {...field}
      options={options}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.label
      }
      getOptionSelected={(option, value) => value.value === option.value.value}
      onChange={(_, value) => setFieldValue(name, value.value)}
      onBlur={() => setTouched({ [name]: true })}
      renderInput={(props) => (
        <TextField
          {...props}
          {...textFieldProps}
          helperText={helperText}
          error={error}
        />
      )}
    />
  );
};

export default SelectField;
