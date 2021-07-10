import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

interface ICustomChakraProvider {
  children?: React.ReactNode;
}

const theme = extendTheme({
    colors: {
        loginBg: {
            100: '#E5E7EB'
        },
        loginButtonBg: {
            100: '#10B981'
        }
    },
});

export const CustomChakraProvider: React.FC<ICustomChakraProvider> = (
  props
) => {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
};
