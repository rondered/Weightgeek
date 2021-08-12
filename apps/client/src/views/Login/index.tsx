import React from "react";
import { FormDivider, FormButton } from "../../components";
import { config } from "../../config";
import { FaGoogle as GoogleIcon } from "react-icons/fa";
import tw, { styled, theme } from "twin.macro";
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import { useLogin } from "../../hooks";
import { Link, Redirect } from "wouter";
import { MainContainer } from "../../components/layout/MainContainer";

const LoginContainer = styled.div`
  ${tw`flex h-screen p-10 min-w-min md:max-w-xl bg-indigo-100`}
`;

const LoginFormContainer = styled.div`
  flex: 1;
  display: grid;
  gap: 10px;
  width: 100%;
  padding: 20px;
`;

const LoginHeader = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 25px;
  font-weight: 900;
`;

const LoginDecorationContainer = styled.div`
  flex: 2;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.mainColor};
`;

const FormContainer = styled.div`
  display: grid;
  gap: 20px;
`;

const OfferSignupContainer = styled.div`
  display: inline-block;
  a {
    font-weight: 600;
  }
`;

const SuccessRedirect: React.FC<{}> = () => <Redirect to="/" />;

export const Login = () => {
  const {
    isLoading,
    handleSubmit,
    register,
    formErrors,
    responseError,
    isResponseError,
    isSuccess,
  } = useLogin();

  return (
    <MainContainer>
      {isSuccess && <Redirect to="/" />}
      <LoginContainer>
        <LoginFormContainer>
          <LoginHeader>Welcome Back!</LoginHeader>
          {isResponseError && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>{responseError}</AlertDescription>
            </Alert>
          )}
          <a href={`${config.API_URL}/google/redirect`}>
            <FormButton
              leftIcon={<GoogleIcon />}
              text="Login With Google"
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
              <FormButton isLoading={isLoading} text="Login" />
            </FormContainer>
          </form>
          <OfferSignupContainer>
            Don't have an account? <Link to="/signup">Signup</Link>
          </OfferSignupContainer>
        </LoginFormContainer>
      </LoginContainer>
    </MainContainer>
  );
};
