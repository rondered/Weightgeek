import React from "react";
import { FormDivider, FormButton, SocialLoginButton } from "../../components";
import tw, { styled, theme } from "twin.macro";
import { useLogin } from "../../hooks";
import { Link, Redirect } from "wouter";
import { MainContainer } from "../../components/layout/MainContainer";
import { HiOutlineMail as MailIcon } from "react-icons/hi";
import { RiLockPasswordLine as PasswordIcon } from "react-icons/ri";

const LoginContainer = styled.div`
  ${tw`flex h-screen justify-center items-center md:justify-start`}
`;

const LoginFormContainer = styled.div`
  ${tw`w-full h-screen p-10 md:w-[400px] md:h-auto`}
`;

const LoginHeader = styled.div`
  ${tw`mb-8 text-4xl font-extrabold text-center`}
`;

const DividerContainer = styled.div`
  ${tw`flex mt-6 mb-6`}
`;

const Input = (props) => {
  const InputField = styled.input<{ isInvalid: boolean }>`
    ${tw`border border-white rounded-lg p-3 shadow-sm text-base w-full -ml-10 pl-10 bg-transparent`}
    ${(props) => props.isInvalid && tw`border-red-500`}
  `;
  const Icon = styled.div`
    ${tw`w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center`}
  `;
  return (
    <div css={tw`flex`}>
      <Icon>{props.icon}</Icon>
      <InputField {...props} />
    </div>
  );
};

const InputError = styled.div<{ isInvalid: boolean }>`
  ${tw`text-red-500`}
`;

const InputContainer = styled.div`
  ${tw`flex w-full h-[70px] flex-col text-xs font-semibold gap-[1px]`}
`;

const FormContainer = styled.div`
  ${tw`grid grid-flow-row gap-[10px]`}
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
              <InputContainer>
                <Input
                  {...register("email")}
                  type="email"
                  name="email"
                  placeholder="email"
                  isInvalid={formErrors.email}
                  icon={<MailIcon size="20px" />}
                />
                <InputError>
                  {formErrors.email && <p>{formErrors.email.message}</p>}
                </InputError>
              </InputContainer>
              <InputContainer>
                <Input
                  {...register("password")}
                  type="password"
                  name="password"
                  placeholder="password"
                  isInvalid={formErrors?.password}
                  icon={<PasswordIcon size="20px" />}
                />
                <InputError>
                  {formErrors.password && <p>{formErrors.password.message}</p>}
                </InputError>
              </InputContainer>
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
