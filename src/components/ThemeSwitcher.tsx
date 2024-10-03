import { Palette } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { IThemeContext, IThemeMode } from "../ThemeContext/types";

const ThemeSwitcher: React.FunctionComponent = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { themeMode, switchThemeMode } = useContext(
    ThemeContext
  ) as IThemeContext;
  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleSwitchTheme = (mode: IThemeMode) => {
    switchThemeMode(mode);
    handleCloseMenu();
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpenMenu}
        startIcon={<Palette />}
      >
        Switch Theme
      </Button>
      <Menu
        open={openMenu}
        anchorEl={buttonRef.current}
        onClose={handleCloseMenu}
      >
        <MenuItem
          onClick={() => handleSwitchTheme(IThemeMode.LIGHT)}
          selected={themeMode === IThemeMode.LIGHT}
        >
          Light
        </MenuItem>
        <MenuItem
          onClick={() => handleSwitchTheme(IThemeMode.DARK)}
          selected={themeMode === IThemeMode.DARK}
        >
          Dark
        </MenuItem>
        <MenuItem
          onClick={() => handleSwitchTheme(IThemeMode.SYSTEM)}
          selected={themeMode === IThemeMode.SYSTEM}
        >
          System
        </MenuItem>
      </Menu>
    </>
  );
};

export default ThemeSwitcher;


