import React from "react";
import { LoginContainer } from "./components/LoginContainer";
import { LoginButton } from "./components/LoginButton";
import { Link } from "wouter";
import { config } from '../../config';

export const Login = () => {

  return (
    <LoginContainer>
      <a href={`${config.API_URL}/google/redirect`}>
        <LoginButton isLoading={false} />
      </a>
    </LoginContainer>
  );
};
