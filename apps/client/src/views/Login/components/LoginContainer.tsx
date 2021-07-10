import React from "react";
import { Flex, Box } from "@chakra-ui/react";

interface ILoginContainer {
  children?: React.ReactNode;
}

export const LoginContainer: React.FC<ILoginContainer> = (props) => (
  <Flex bg="loginBg.100" minH={"100vh"} align={"center"} justify={"center"}>
    <Box m={5} bg="white" minW="200px" maxW="700px" p={8} boxShadow={"lg"}>
      {props.children}
    </Box>
  </Flex>
);
