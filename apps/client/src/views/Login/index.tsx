import React from "react";
import { LoginButton, LoginDivider, LoginForm } from "./components";
import { config } from "../../config";
import { FaGoogle } from "react-icons/fa";
import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';


const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100wh;
`;

const LoginFormContainer = styled.div`
  flex: 1;
  display: grid;
  gap: 10px;
  width: 100%;
  padding: 20px;
`

const LoginDecorationContainer = styled.div`
  flex: 2;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.mainColor};

  ${breakpoint('mobile', 'tablet')`
  display: none;
  `}
`

export const Login = () => {
  return (
    <LoginContainer>
      <LoginFormContainer>
        <a href={`${config.API_URL}/google/redirect`}>
          <LoginButton
            leftIcon={<FaGoogle />}
            text="Login With Google"
            isLoading={false}
          />
        </a>
        <LoginDivider />
        <LoginForm />
      </LoginFormContainer>
      <LoginDecorationContainer/>
    </LoginContainer>
  );
};
