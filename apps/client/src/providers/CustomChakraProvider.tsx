import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeContext } from "styled-components";
interface ICustomChakraProvider {
  children?: React.ReactNode;
}

export const CustomChakraProvider: React.FC<ICustomChakraProvider> = (
  props
) => {
  const themeContext = React.useContext(ThemeContext);

  const chakraTheme = extendTheme({
    fonts: {
      heading: themeContext.fontFamily,
      body: themeContext.fontFamily,
    },
    fontSizes: {
      md: themeContext.mdFontSize,
      sm: themeContext.smFontSize,
    },
    colors: {
      loginBg: {
        100: themeContext.mainColor,
      },
      loginButtonBg: {
        100: themeContext.mainColor,
      },
      loginFormFieldFocus: {
        100: themeContext.mainColor,
      },
    },
  });

  return <ChakraProvider theme={chakraTheme}>{props.children}</ChakraProvider>;
};
