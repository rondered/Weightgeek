import React from "react";
import tw, { styled, css } from "twin.macro";
import { CgSpinner as SpinnerIcon } from "react-icons/cg";

interface IFormButton {
  children?: React.ReactNode;
  isLoading?: boolean;
  leftIcon?: React.ReactElement;
  text?: string;
  backgroundColor?: string;
}

export const FormButton: React.FC<IFormButton> = (props) => (
  <button
    css={tw`flex rounded justify-center text-white font-bold items-center h-auto w-full h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 pl-10 pr-10 pt-6 pb-6 hover:(from-green-200 via-blue-400 to-purple-500)`}
  >
    {props.isLoading ? (
      <div css={tw`animate-spin`}>
        <SpinnerIcon size="30px" />
      </div>
    ) : (
      props.text
    )}
  </button>
);
