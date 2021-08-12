import React from "react";
import { Spinner } from "@chakra-ui/react";
import tw, { styled, theme } from "twin.macro";

interface IFormButton {
  children?: React.ReactNode;
  isLoading?: boolean;
  leftIcon?: React.ReactElement;
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  onClick?: void;
}

const FormButtonContainer = styled.button`
  ${tw`flex justify-center items-center h-auto justify-between w-full h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-5 shadow-md rounded-full`}
`;

export const FormButton: React.FC<IFormButton> = (props) => (
  <FormButtonContainer {...props}>
    <div className="icon">{props.leftIcon}</div>
    <div className="text">
      {props.isLoading ? <Spinner size="sm" /> : props.text}
    </div>
  </FormButtonContainer>
);
