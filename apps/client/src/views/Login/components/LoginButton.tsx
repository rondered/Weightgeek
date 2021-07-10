import React from "react";
import { Button } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

interface ILoginButton {
  children?: React.ReactNode;
  isLoading: boolean;
  leftIcon?: React.ReactElement;
  text?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export const LoginButton: React.FC<ILoginButton> = (props) => (
  <Button
    isFullWidth
    bg="loginButtonBg.100"
    color="white"
    _hover={{ transform: "scale(1.02)" }}
    leftIcon={props.leftIcon}
    type={props.type}
  >
    {props.text}
  </Button>
);
