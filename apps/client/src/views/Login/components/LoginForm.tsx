import React from "react";
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { LoginButton } from ".";
import { useLoginForm } from "../../../hooks/forms";
import { useLogin } from "../../../hooks/api";
import styled from "styled-components";

const LoginFormContainer = styled.div`
  display: grid;
  gap: 20px;
`;

export const LoginForm = () => {
  const { mutate, isLoading, data, isError } = useLogin();
  const { register, handleSubmit, errors } = useLoginForm();

  return (
    <form onSubmit={handleSubmit((values) => mutate(values))}>
      <LoginFormContainer>
        <FormControl isInvalid={errors.email}>
          <InputGroup>
            <Input
              {...register("email")}
              type="email"
              name="email"
              placeholder="email"
              isInvalid={errors.email}
              focusBorderColor="loginFormFieldFocus.100"
            />
          </InputGroup>
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <InputGroup>
            <Input
              {...register("password")}
              type="password"
              name="password"
              placeholder="password"
              isInvalid={errors.password}
              focusBorderColor="loginFormFieldFocus.100"
            />
          </InputGroup>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <LoginButton isLoading={isLoading} text="Login" />
      </LoginFormContainer>
    </form>
  );
};
