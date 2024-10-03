import { Mail } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const MuiList = () => {
  return (
    <Box
      sx={{
        width: "400px",
        bgcolor: "#efefef",
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 1" secondary="Secondary text" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 2" secondary="Secondary text" />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 3" secondary="Secondary text" />
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
