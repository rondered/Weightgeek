import React from "react";
import { Flex, Divider, Spacer } from "@chakra-ui/react";

export const LoginDivider = () => (
  <Flex align="center">
    <Divider w="180px" />
    <Spacer />
    OR
    <Spacer />
    <Divider w="180px" />
  </Flex>
);
