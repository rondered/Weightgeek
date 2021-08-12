import React from "react";
import { FormDivider, FormButton } from "../../components";
import { config } from "../../config";
import { FaGoogle as GoogleIcon } from "react-icons/fa";
import tw, { styled, theme } from "twin.macro";
import { useLogin } from "../../hooks";
import { Link, Redirect } from "wouter";
import { MainContainer } from "../../components/layout/MainContainer";

const LoginContainer = styled.div`
  ${tw`flex h-screen justify-center items-center`}
`;

const LoginFormContainer = styled.div`
  ${tw`w-full p-10 md:w-[600px] md:shadow-2xl`}
`;

const LoginHeader = styled.div`
  ${tw`mb-8 text-4xl`}
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
          <FormButton
            leftIcon={<GoogleIcon />}
            text="Login With Google"
            isLoading={false}
          />
          <FormDivider text="OR" />
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <input
                {...register("email")}
                type="email"
                name="email"
                placeholder="email"
              />
              <input
                {...register("password")}
                type="password"
                name="password"
                placeholder="password"
              />
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
