import React from "react";
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { FormButton } from '../../../components'
import { useSignupForm } from "../../../hooks/forms";
import { useSignup } from "../../../hooks/api";
import styled from "styled-components";

const LoginFormContainer = styled.div`
  display: grid;
  gap: 20px;
`;

export const SignupForm = () => {
  const { mutate, isLoading, data, isError, error } = useSignup();
  const { register, handleSubmit, errors } = useSignupForm();

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
          { JSON.stringify(isError) }
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
        <FormButton isLoading={isLoading} text="Sign up" />
      </LoginFormContainer>
    </form>
  );
};
