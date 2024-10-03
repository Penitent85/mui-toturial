import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Box, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <Menu />
      </IconButton>
      <Drawer
      //  variant='temporary" do not use it  n 
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width={250} textAlign={"center"} role="presentation">
          <Typography component={"div"} variant="h6">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
