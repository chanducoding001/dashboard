import { TextField } from "@mui/material";
import React from "react";

const DateField = (props) => {
  const { label } = props;
  return (
    <TextField
      type="date"
      label={label}
      InputLabelProps={{ shrink: true }}
      sx={{
        height: "30px",
        width: "145px",
      }}
      InputProps={{
        sx: {
          height: "30px",
        },
      }}
    />
  );
};

export default DateField;
