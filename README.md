import React, { createContext, useEffect, useState } from "react";
import { IThemeContext, IThemeMode } from "./types";
import { Theme, useMediaQuery } from "@mui/material";
import { AppLightTheme, AppDarkTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeContextProvider: React.FunctionComponent<
  React.PropsWithChildren
> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<IThemeMode>(IThemeMode.LIGHT);
  const [theme, setTheme] = useState<Theme>(AppLightTheme);
  const SYSTEM_THEME: IThemeMode = useMediaQuery(
    "(prefers-color-scheme: dark)"
  )
    ? IThemeMode.DARK
    : IThemeMode.LIGHT;

  useEffect(() => {
    switch (themeMode) {
      case IThemeMode.LIGHT:
        setTheme(AppLightTheme);
        break;
      case IThemeMode.DARK:
        setTheme(AppDarkTheme);
        break;
      case IThemeMode.SYSTEM:
        switch (SYSTEM_THEME) {
          case IThemeMode.LIGHT:
            setTheme(AppLightTheme);
            break;
          case IThemeMode.DARK:
            setTheme(AppDarkTheme);
            break;
          default:
            setTheme(AppLightTheme);
            break;
        }
        break;
      default:
        setTheme(AppLightTheme);
        break;
    }
  }, [themeMode, SYSTEM_THEME]);
  const switchThemeMode = (mode: IThemeMode) => {
    setThemeMode(mode);
  };
  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        switchThemeMode,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
