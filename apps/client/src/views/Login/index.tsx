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
  ${tw`w-full h-screen p-10 rounded-lg bg-white md:w-[600px] md:shadow md:h-auto`}
`;

const LoginHeader = styled.div`
  ${tw`mb-8 text-4xl`}
`;

const DividerContainer = styled.div`
  ${tw`flex pt-6 pb-6 pl-10 pr-10`}
`;

const LoginInput = styled.input<{ isInvalid: boolean }>`
  ${tw`border rounded-lg p-3 focus:ring`}
  ${(props) => (props.isInvalid ? tw`border-red-400` : tw`border-gray-200`)}
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
