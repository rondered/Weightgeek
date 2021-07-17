import React from "react";
import { Spinner } from "@chakra-ui/react";
import styled from "styled-components";

interface ILoginButton {
  children?: React.ReactNode;
  isLoading?: boolean;
  leftIcon?: React.ReactElement;
  text?: string;
  backgroundColor?: string;
}

const LoginButtonContainer = styled.button<ILoginButton>`
  padding: 10px;
  display: inline-grid;
  grid-template-columns: 5% 90% 5%;
  align-items: center;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.mainColor};
  width: 100%;
  color: ${(props) => props.theme.buttonTextColor};
  font-weight: 300;
  font-size: 18px;
  border-radius: 13px;
  .icon {
    grid-column: 1;
  }
  .text {
    grid-column: 2;
  }
`;

export const LoginButton: React.FC<ILoginButton> = (props) => (
  <LoginButtonContainer {...props}>
    <div className="icon">{props.leftIcon}</div>
    <div className="text">
      {props.isLoading ? <Spinner size="sm" /> : props.text}
    </div>
  </LoginButtonContainer>
);
