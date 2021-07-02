import React from "react";
import { LoginContainer } from "./components/LoginContainer";
import { LoginButton } from "./components/LoginButton";

export const Login = () => {
  return <LoginContainer><LoginButton isLoading={false} /></LoginContainer>;
};
