import React from "react";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Box sx={{paddingTop: "100px", width: "100%", minHeight: "100 vh", backgroundColor: "background.default"}}>
      <Container>
        <Outlet />
      </Container>
    </Box>
  )
}

export default Layout;