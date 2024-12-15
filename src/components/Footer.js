import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 2,
        mt: 4,
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <Typography variant="body2">
        © 2024 ISSATGF. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;