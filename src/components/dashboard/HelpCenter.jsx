import { Box, Card, Typography } from "@mui/material";
import React from "react";
import CustomButtons from "../../reusables/CustomButtons";

const HelpCenter = () => {
  return (
    <Card sx={{ padding: "16px", marginTop: "16px", background: "blue" }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
        <Box>
          <Typography variant="h6" sx={{ color: "white" }}>
            Help Center
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            Having Trouble in Krypton? Please contact us for more questions.
          </Typography>
        </Box>
      </Box>
      <CustomButtons
        styles={{ backgroundColor: "rgba(255,255,0,0.9)", color: "black" }}
      >
        <Typography>Go To Help Center</Typography>
      </CustomButtons>
    </Card>
  );
};

export default HelpCenter;
