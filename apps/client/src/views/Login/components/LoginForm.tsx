import React from "react";
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { FormButton } from "../../../components";
import { useLogin } from "../../../hooks";
import styled from "styled-components";

const LoginFormContainer = styled.div`
  display: grid;
  gap: 20px;
`;

export const LoginForm = () => {
  const {
    isLoading,
    handleSubmit,
    register,
    formErrors,
    responseError,
    isResponseError,
  } = useLogin();

  return (
    <form onSubmit={handleSubmit}>
      <LoginFormContainer>
        <FormControl isInvalid={formErrors.email}>
          <InputGroup>
            <Input
              {...register("email")}
              type="email"
              name="email"
              placeholder="email"
              isInvalid={formErrors.email}
              focusBorderColor="loginFormFieldFocus.100"
            />
          </InputGroup>
          <FormErrorMessage>{formErrors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formErrors.password}>
          <InputGroup>
            <Input
              {...register("password")}
              type="password"
              name="password"
              placeholder="password"
              isInvalid={formErrors.password}
              focusBorderColor="loginFormFieldFocus.100"
            />
          </InputGroup>
          <FormErrorMessage>{formErrors.password?.message}</FormErrorMessage>
        </FormControl>
        <FormButton isLoading={isLoading} text="Login" />
      </LoginFormContainer>
    </form>
  );
};
