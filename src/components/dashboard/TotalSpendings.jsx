import { Box, Typography } from "@mui/material";
import React from "react";

const TotalSpendings = () => {
  const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px 0px",
  };
  return (
    <Box sx={container}>
      <Typography variant="h7" sx={{ color: "gray", fontWeight: "bold" }}>
        Total Spendings
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        $1,549.00
      </Typography>
    </Box>
  );
};

export default TotalSpendings;
