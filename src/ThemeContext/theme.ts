import { Theme, createTheme } from "@mui/material";

export const AppLightTheme: Theme = createTheme({
  palette: {
    background: {
      default: "rgb(243, 255, 255)",
      paper: "rgb(255, 255, 255)",
    },
  },
});

export const AppDarkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "rgb(33, 37, 39)",
      paper: "rgb(41, 44, 49)",
    },
  },
});
