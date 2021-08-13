import React from "react";
import tw, { styled } from "twin.macro";

interface IFormDivider {
  text?: string;
}

const FormDividerContainer = styled.div`
  ${tw`flex items-center h-10 w-full`}
`;

const Divider = styled.div`
  ${tw`h-px bg-gray-300 w-full`}
`;

const DividerText = styled.div`
  ${tw`pl-4 pr-4`}
`;

export const FormDivider: React.FC<IFormDivider> = (props) => (
  <FormDividerContainer>
    <Divider />
    <DividerText> {props.text}</DividerText>
    <Divider />
  </FormDividerContainer>
);
