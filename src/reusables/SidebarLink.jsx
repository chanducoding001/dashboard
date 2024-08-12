import { Box, ListItemButton, Typography } from "@mui/material";
import React from "react";

const SidebarLink = (props) => {
  const { leftIcon, linkText, rightIcon, isActive } = props;
  const container = {
    display: "flex",
    width: "100%",
    justifyContent: rightIcon ? "space-between" : "start",
    alignItems: "center",
    padding: "5px",
    color: isActive ? "blue" : "black",
  };
  const leftText = {
    display: "flex",
    width: rightIcon ? "90%" : "85%",
    justifyContent: "space-around",
  };

  return (
    <ListItemButton sx={container}>
      <Box sx={leftText}>
        {leftIcon}
        <Typography>{linkText}</Typography>
      </Box>
      {rightIcon && rightIcon}
    </ListItemButton>
  );
};

export default SidebarLink;
