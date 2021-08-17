import React from "react";
import tw, { styled } from "twin.macro";

interface IFormInput {
  isInvalid?: boolean;
  errorMessage?: boolean;
}

const InputField = styled.input<{ isInvalid?: boolean }>`
  ${tw`p-3 pl-10 -ml-10 border border-gray-600 text-base w-full bg-gray-900 placeholder-white transition-colors duration-1000`}
`;
const Icon = styled.div`
  ${tw`w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center`}
`;

const InputError = styled.div`${tw`relative bottom-[20px] text-right font-light pr-2 pb-2 text-xs text-red-400`}`;

const InputContainer = styled.div`
  ${tw`flex w-full h-[50px] flex-col text-xs`}
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
