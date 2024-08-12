import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function CustomButtons({ styles = {}, children }) {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: styles.color || theme.palette.common.white, // Default to white text
    textTransform: "none",
    fontWeight: "600",
    fontSize: "1rem",
    backgroundColor: styles.backgroundColor || theme.palette.primary.main, // Default to primary blue
    "&:hover": {
      backgroundColor: styles.backgroundColor
        ? theme.palette.augmentColor({
            color: { main: styles.backgroundColor },
          }).dark
        : theme.palette.primary.dark, // Darken if custom color, else default dark primary
    },
  }));

  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained">{children}</ColorButton>
    </Stack>
  );
}
