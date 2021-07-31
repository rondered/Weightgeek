import React from "react";
import { FormDivider, FormButton } from "../../components";
import { config } from "../../config";
import { FaGoogle as GoogleIcon } from "react-icons/fa";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import { useSignup } from "../../hooks";
import { Link, Redirect } from "wouter";

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100wh;
`;

const SignupFormContainer = styled.div`
  flex: 1;
  display: grid;
  gap: 10px;
  width: 100%;
  padding: 20px;
`;

const SignupHeader = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 25px;
  font-weight: 900;
`;

const SignupDecorationContainer = styled.div`
  flex: 2;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.mainColor};

  ${breakpoint("mobile", "tablet")`
  display: none;
  `}
`;

const FormContainer = styled.div`
  display: grid;
  gap: 20px;
`;

const OfferLoginContainer = styled.div`
  display: inline-block;
  a {
    font-weight: 600;
  }
`;

const SuccessRedirect: React.FC<{}> = () => <Redirect to="/" />;

export const Signup: React.FC<{}> = () => {
  const {
    isLoading,
    handleSubmit,
    register,
    formErrors,
    responseError,
    isResponseError,
    isSuccess,
  } = useSignup();

  return (
    <>
      {isSuccess && <Redirect to="/" />}
      <SignupContainer>
        <SignupFormContainer>
          <SignupHeader>Sign up</SignupHeader>
          {isResponseError && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>{responseError}</AlertDescription>
            </Alert>
          )}
          <a href={`${config.API_URL}/google/redirect`}>
            <FormButton
              leftIcon={<GoogleIcon />}
              text="Sign up with Google"
              isLoading={false}
              backgroundColor="#374151"
            />
          </a>
          <FormDivider text="OR" />
          <form onSubmit={handleSubmit}>
            <FormContainer>
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
                <FormErrorMessage>
                  {formErrors.password?.message}
                </FormErrorMessage>
              </FormControl>
              <FormButton isLoading={isLoading} text="Sign up" />
            </FormContainer>
          </form>
          <OfferLoginContainer>
            Already signed up? <Link to="/login">Login</Link>
          </OfferLoginContainer>
        </SignupFormContainer>
        <SignupDecorationContainer />
      </SignupContainer>
    </>
  );
};
