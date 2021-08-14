import React from "react";
import { FormDivider, FormButton, SocialLoginButton } from "../../components";
import { config } from "../../config";
import tw, { styled, theme } from "twin.macro";
import { useLogin } from "../../hooks";
import { Link, Redirect } from "wouter";
import { MainContainer } from "../../components/layout/MainContainer";

const LoginContainer = styled.div`
  ${tw`flex h-screen justify-center items-center`}
`;

const LoginFormContainer = styled.div`
  ${tw`w-full h-screen p-10 rounded-lg bg-white md:w-[600px] md:shadow md:h-auto`}
`;

const LoginHeader = styled.div`
  ${tw`mb-8 text-4xl font-extrabold`}
`;

const DividerContainer = styled.div`
  ${tw`flex mt-6 mb-6`}
`;

const LoginInput = styled.input<{ isInvalid: boolean }>`
  ${tw`border rounded-lg p-3 focus:ring`}
  ${(props) => (props.isInvalid ? tw`border-red-400` : tw`border-gray-200`)}
`;

const FormContainer = styled.div`
  ${tw`grid grid-flow-row gap-5`}
`;

const OfferSignupContainer = styled.div`
  ${tw`mt-10`}
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
          <div css={tw`flex gap-10 justify-center`}>
            <a href="http://localhost:4444/auth/google/redirect">
              <SocialLoginButton variation="google" />
            </a>
            <a href="http://localhost:4444/auth/facebook/redirect">
              <SocialLoginButton variation="facebook" />
            </a>
          </div>
          <DividerContainer>
            <FormDivider text="OR" />
          </DividerContainer>
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <LoginInput
                {...register("email")}
                type="email"
                name="email"
                placeholder="email"
                isInvalid={formErrors.email}
              />
              {formErrors.email && <p>{formErrors.email.message}</p>}
              <LoginInput
                {...register("password")}
                type="password"
                name="password"
                placeholder="password"
                isInvalid={formErrors?.password}
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
