import { Button } from "@mui/material";
import React from "react";

const IconButton = (props) => {
  const HeaderIcon = props.icon;
  return (
    <Button
      sx={{
        border: "1px solid lightblue",
        borderRadius: "10px",
        minWidth: "auto",
        padding: "6px",
      }}
    >
      {HeaderIcon}
    </Button>
  );
};

export default IconButton;
