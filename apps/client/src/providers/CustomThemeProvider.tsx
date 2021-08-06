import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

interface ICustomThemeProvider {
  children?: React.ReactNode;
}

const theme = {
  mainColor: "#6366F1",
  buttonTextColor: "#FFFFFF",
  mainBgColor: "black",
  fontFamily: "'Roboto', sans-serif",
  mdFontSize: "18px",
  smFontSize: "14px",
};

const GlobalStyle = createGlobalStyle`
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
