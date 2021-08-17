import React from "react";
import tw, { styled } from "twin.macro";

interface IFormInput {
  isInvalid?: boolean;
  errorMessage?: boolean;
}

const InputField = styled.input<{ isInvalid?: boolean }>`
  ${tw`rounded-lg p-3 shadow-sm text-base w-full -ml-10 pl-10 bg-green-600 placeholder-white transition-colors duration-1000`}
  ${(props) => props.isInvalid && tw`bg-red-500`}
`;
const Icon = styled.div`
  ${tw`w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center`}
`;

const InputError = styled.div`
  ${tw`text-red-500`}
`;

const InputContainer = styled.div`
  ${tw`flex w-full h-[70px] flex-col text-xs font-semibold gap-[1px]`}
`;

export const FormInput = (props) => {
  return (
    <InputContainer>
      <div css={tw`flex`}>
        <Icon>{props.icon}</Icon>
        <InputField {...props} />
      </div>
      {props.isInvalid && <InputError>{props.errorMessage}</InputError>}
    </InputContainer>
  );
};
