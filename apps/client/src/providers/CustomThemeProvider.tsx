import React from "react";
import react from "react";
import {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from "styled-components";

interface ICustomThemeProvider {
  children?: React.ReactNode;
}

interface CustomTheme {
  mainColor: string;
  buttonTextColor: string;
  fontFamily: string;
  mdFontSize: string;
}

const theme = {
  mainColor: "#6366F1",
  buttonTextColor: "#FFFFFF",
  fontFamily: "'Roboto', sans-serif",
  mdFontSize: "13px",
};

const GlobalStyle = createGlobalStyle<CustomTheme>`
body {
  font-family: 'Roboto', sans-serif;
}
`;

export const CustomThemeProvider: React.FC<ICustomThemeProvider> = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {props.children}
      </ThemeProvider>
    </>
  );
};
