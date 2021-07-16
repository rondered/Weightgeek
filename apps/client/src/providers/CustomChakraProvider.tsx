import React from "react";
import { chakra, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeContext } from 'styled-components';
interface ICustomChakraProvider {
  children?: React.ReactNode;
}

export const CustomChakraProvider: React.FC<ICustomChakraProvider> = (
  props
) => {

  const themeContext = React.useContext(ThemeContext)

  const chakraTheme = extendTheme({
    colors: {
      loginBg: {
        100: themeContext.mainColor,
      },
      loginButtonBg: {
        100: themeContext.mainColor,
      },
    },
  });

  return <ChakraProvider theme={chakraTheme}>{props.children}</ChakraProvider>;
};
