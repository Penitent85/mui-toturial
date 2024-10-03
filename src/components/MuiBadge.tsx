import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

const MuiBadge = () => {
  return (
    <Stack m={2} spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="secondary">
        <Mail />
      </Badge>
      <Badge badgeContent={0} showZero color="secondary">
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="secondary">
        <Mail />
      </Badge>
      <Badge badgeContent={100} max={999} color="secondary">
        <Mail />
      </Badge>
      <Badge badgeContent={10} color="secondary" variant="dot">
        <Mail />
      </Badge>
      <Badge badgeContent={10} color="secondary" variant="dot" invisible={true}>
        <Mail />
      </Badge>
      
    </Stack>
  );
};

export default MuiBadge;
