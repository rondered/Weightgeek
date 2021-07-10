import React from "react";
import {
  LoginButton,
  LoginContainer,
  LoginDivider,
  LoginForm,
} from "./components";
import { config } from "../../config";
import { FaGoogle } from 'react-icons/fa';
import { Flex, VStack, Spacer, Divider } from "@chakra-ui/react";

export const Login = () => {
  return (
    <LoginContainer>
      <VStack spacing={4} align="stretch">
        <a href={`${config.API_URL}/google/redirect`}>
          <LoginButton leftIcon={<FaGoogle/>} text="Login With Google" isLoading={false} />
        </a>
        <LoginDivider />
        <LoginForm />
      </VStack>
    </LoginContainer>
  );
};
