import React from "react";
import {
  FormDivider,
  FormButton,
  SocialLoginButton,
  FormInput,
  FormAlert,
} from "../../components";
import tw, { styled, theme } from "twin.macro";
import { useLogin } from "../../hooks";
import { Link, Redirect } from "wouter";
import { MainContainer } from "../../components/layout/MainContainer";
import { HiOutlineMail as MailIcon } from "react-icons/hi";
import { RiLockPasswordLine as PasswordIcon } from "react-icons/ri";

const LoginContainer = styled.div`
  ${tw`flex h-screen w-full justify-center items-center md:justify-center md:w-1/2`}
`;
const LoginFormContainer = styled.div`
  ${tw`w-full h-screen p-10 md:w-1/2 md:min-w-[400px] md:h-auto shadow-2xl bg-white`}
`;
const LoginHeader = styled.div`
  ${tw`mb-8 text-4xl font-extrabold text-center`}
`;
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
      <div
        css={[
          tw`flex w-full  bg-gradient-to-r from-purple-100 to-indigo-600 bg-fixed `,
        ]}
      >
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
            <div css={tw`flex mt-6 mb-6`}>
              <FormDivider text="OR" />
            </div>
            <form onSubmit={handleSubmit}>
              <FormContainer>
                {isResponseError ? (
                  <FormAlert message={responseError} />
                ) : (
                  <></>
                )}
                <InputContainer>
                  <FormInput
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
                  <FormInput
                    {...register("password")}
                    type="password"
                    name="password"
                    placeholder="password"
                    isInvalid={formErrors?.password}
                    icon={<PasswordIcon size="20px" />}
                  />
                  <InputError>
                    {formErrors.password && (
                      <p>{formErrors.password.message}</p>
                    )}
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
      </div>
    </MainContainer>
  );
};
