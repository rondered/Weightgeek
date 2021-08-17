import React from "react";
import tw, { styled } from "twin.macro";

const InputField = styled.input<{ isInvalid: boolean }>`
  ${tw`rounded-lg p-3 shadow-sm text-base w-full -ml-10 pl-10 bg-purple-900`}
  ${(props) => props.isInvalid && tw`border border-red-500`}
`;
const Icon = styled.div`
  ${tw`w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center`}
`;
export const FormInput = (props) => {
  return (
    <div css={tw`flex`}>
      <Icon>{props.icon}</Icon>
      <InputField {...props} />
    </div>
  );
};
