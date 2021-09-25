import React from "react";
import {
  FormDivider,
  FormButton,
  SocialLoginButton,
  FormInput,
} from "@/components/common";
import { useSignup } from "./useSignup";
import { Link, Redirect } from "wouter";
import { FormAlert } from "@/components/common";
import { MainContainer } from "@/components/layout";

export const Signup = () => {
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
    <MainContainer>
      {isSuccess && <Redirect to="/" />}
      <div className="flex w-full bg-bgColor">
        <div className="flex h-screen w-full justify-center items-center md:(justify-center w-1/2)">
          <div className="card w-full h-screen md:(w-1/2 min-w-[350px] max-w-[450px] h-auto)">
          <div className="p-10">
            <div className="mb-8 text-4xl font-extrabold text-center header">
              Sign Up
            </div>
            <div className="flex gap-[15px] flex-col">
              <SocialLoginButton variation="google" />
              <SocialLoginButton variation="facebook" />
            </div>
            <div className="flex mt-6 mb-6">
              <FormDivider text="OR" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-[15px] flex-col">
                {isResponseError && (
                  <FormAlert message={responseError} variation="error" />
                )}
                <FormInput
                  {...register("email")}
                  type="email"
                  name="email"
                  placeholder="email"
                  isInvalid={formErrors.email}
                  icon={<IconGgMail className="h-[20px] w-[20px]" />}
                  errorMessage={formErrors.email?.message}
                />
                <FormInput
                  {...register("password")}
                  type="password"
                  name="password"
                  placeholder="password"
                  isInvalid={formErrors?.password}
                  icon={<IconGgLock className="h-[20px] w-[20px]" />}
                  errorMessage={formErrors.password?.message}
                  maxLength={24}
                />
                <FormButton isLoading={isLoading} text="Sign Up" />
              </div>
            </form>
            </div>
            <div className="divider md:block"></div>
            <div className="p-10">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
