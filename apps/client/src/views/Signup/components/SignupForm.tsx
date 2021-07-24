import React from "react";
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { FormButton } from "../../../components";
import { useSignup } from "../../../hooks";
import styled from "styled-components";

const LoginFormContainer = styled.div`
  display: grid;
  gap: 20px;
`;

export const SignupForm = () => {
  const {
    isLoading,
    handleSubmit,
    register,
    formErrors,
    responseError,
    isResponseError,
  } = useSignup();

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
          {JSON.stringify(responseError)}
          <FormErrorMessage>{formErrors.password?.message}</FormErrorMessage>
        </FormControl>
        <FormButton isLoading={isLoading} text="Sign up" />
      </LoginFormContainer>
    </form>
  );
};
