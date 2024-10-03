import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, IconButton, Stack, Menu, MenuItem, Link } from "@mui/material";
import {
  CatchingPokemon,
  Keyboard,
  KeyboardArrowDown,
  KeyOff,
} from "@mui/icons-material";
import { useState } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
          Pokemon App
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Feathers</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup={open ? "true" : undefined}
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDown />}
          >
            Resources
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          aria-labelledby="resources-button"
          keepMounted
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link href="#" color="inherit" underline="hover">
              Blog
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="#" color="inherit" underline="hover">
              Podcast
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
