import React from "react";
import tw, { styled } from "twin.macro";
import { AiOutlineAlert as ErrorIcon } from "react-icons/ai";

interface IFormAlert {
  message: string;
  variation: "error";
}

const backgroundForVariation = {
  error: tw`bg-red-400`,
};

const iconForVariation = {
  error: <ErrorIcon size="20px" />,
};

const FormAlertContainer = styled.div<IFormAlert>`
  ${tw`flex items-center justify-between transition duration-1000 p-3`}
  ${(props) => backgroundForVariation[props.variation]}
`;

export const FormAlert: React.FC<IFormAlert> = (props) => {
  return (
    <FormAlertContainer {...props}>
      {props.message}
      {iconForVariation[props.variation]}
    </FormAlertContainer>
  );
};
