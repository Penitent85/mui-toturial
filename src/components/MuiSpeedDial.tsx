import { Edit, FileCopy, Print, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      sx={{
        position: "absolute",
        bottom: 16,
        right: 16,
      }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
    >
      <SpeedDialAction
        key="Copy"
        icon={<FileCopy />}
        tooltipTitle="Copy"
        tooltipOpen
        onClick={() => {}}
      />
      <SpeedDialAction
        key="Print"
        icon={<Print />}
        tooltipTitle="Print"
        tooltipOpen
        onClick={() => {}}
      />
      <SpeedDialAction
        key="Share"
        icon={<Share />}
        tooltipTitle="Share"
        onClick={() => {}}
      />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
