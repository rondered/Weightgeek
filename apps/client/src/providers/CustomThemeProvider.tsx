import React from "react";
import react from "react";
import { ThemeProvider } from "styled-components";

interface ICustomThemeProvider {
  children?: React.ReactNode;
}

const theme = {
  mainColor: "#6366F1",
};

export const CustomThemeProvider: React.FC<ICustomThemeProvider> = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
