import styled from "@emotion/styled";
import { Grid, Grid2, Paper } from "@mui/material";
import React from "react";

const MuiPaper = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 200,
        height: 200,
        backgroundColor: "orange",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "box-shadow 0.3s",
        "&:hover": {
          boxShadow: 24, // Increase the elevation value on hover
        },
      }}
    >
      Hover over me!
    </Paper>
  );
};

export default MuiPaper;
