import React from "react";
import { useAuth } from "../AuthContext";
import { Typography, Button, Box } from "@mui/material";

function Dashboard() {
  const { currentUser, logout } = useAuth();

  return (
    <Box sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h4">Welcome, {currentUser?.email}</Typography>
      <Button variant="contained" color="secondary" onClick={logout} sx={{ mt: 2 }}>
        Logout
      </Button>
    </Box>
  );
}

export default Dashboard;