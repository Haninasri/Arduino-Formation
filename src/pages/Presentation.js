import React from "react";
import { useAuth } from "../AuthContext";
import { Typography, Box  } from "@mui/material";


function Presentation() {
  const { currentUser } = useAuth();

  return (
    <div>
    <Box sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h4">Arduino Uno Presentation</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Welcome, {currentUser?.email}. This is the protected presentation page.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Here, you can add detailed information or slides about Arduino Uno.
      </Typography>
    </Box>
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', color: '#333', fontFamily: 'Roboto' }}>
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRu6Y6PG26QMIsIbLuN1b656nh5ebzMX-kPx2L7vBSrR4bXatWLkDTRAhp8MHIGiA/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1280" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </Box>
    </div>
  );
}

export default Presentation;
