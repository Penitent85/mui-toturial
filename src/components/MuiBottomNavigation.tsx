import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { BottomNavigationAction } from "@mui/material";
import { Favorite, Home, Person } from "@mui/icons-material";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "absolute",
        bottom: 0,
      }}
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
    >
      <BottomNavigationAction
        showLabel
        label="Home"
        value="home"
        icon={<Home />}
      />
      <BottomNavigationAction
        showLabel
        label="Favorites"
        value="favorites"
        icon={<Favorite />}
      />
      <BottomNavigationAction
        showLabel
        label="Profile"
        value="profile"
        icon={<Person />}
      />
    </BottomNavigation>
  );
};

export default MuiBottomNavigation;
