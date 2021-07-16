import React from "react";
import { LoginButton, LoginDivider, LoginForm } from "./components";
import { config } from "../../config";
import { FaGoogle } from "react-icons/fa";
import styled from "styled-components";
import breakpoint, { map } from 'styled-components-breakpoint';


const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100wh;
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${map({mobile: '20px', tablet: '120px', desktop: '120px'}, padding => `padding: ${padding};`)}
`

const LoginDecorationContainer = styled.div`
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
