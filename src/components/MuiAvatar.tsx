import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

const MuiAvatar = () => {
  return (
    <Stack spacing={2}>
      <Stack direction={"row"} spacing={1}>
        <AvatarGroup max={3}>
          <Avatar src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar src="https://material-ui.com/static/images/avatar/4.jpg" />
          <Avatar src="https://material-ui.com/static/images/avatar/5.jpg" />
          <Avatar src="https://material-ui.com/static/images/avatar/6.jpg" />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
