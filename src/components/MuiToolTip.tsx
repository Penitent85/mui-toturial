import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

const MuiToolTip = () => {
  return (
    <Tooltip title="Delete" placement="right" 
    enterDelay={500}  
    leaveDelay={200}  
    
    arrow>
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
};

export default MuiToolTip;
