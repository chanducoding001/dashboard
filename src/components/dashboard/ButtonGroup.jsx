import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { btnData } from "./dashboardRoughData";

const ButtonGroup = () => {
  const [selected, setSelected] = useState("month");

  const getButtonStyles = (buttonType) => ({
    borderRadius: selected === buttonType ? "16px" : "0px",
    backgroundColor: selected === buttonType ? "#1976d2" : "transparent",
    color: selected === buttonType ? "#fff" : "#1976d2",
    fontWeight: selected === buttonType ? "bold" : "normal",
    flexGrow: 1,
  });

  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "15px",
        backgroundColor: "whitesmoke",
        "&:hover": { background: "none" },
      }}
    >
      {btnData?.map((e) => (
        <Button
          key={e?.id}
          variant={selected === e?.type ? "contained" : "none"}
          onClick={() => setSelected(e?.type)}
          sx={getButtonStyles(e?.type)}
        >
          {e?.type}
        </Button>
      ))}
    </Box>
  );
};

export default ButtonGroup;
