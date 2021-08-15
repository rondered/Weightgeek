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
    css={tw`flex justify-center text-white font-bold items-center h-auto w-full h-2 bg-gradient-to-r from-purple-500 to-indigo-600 pl-10 pr-10 pt-6 pb-6 rounded-lg`}
  >
    {props.isLoading ? (
      <div css={tw`animate-spin h-5 w-5`}>
        <SpinnerIcon />
      </div>
    ) : (
      props.text
    )}
  </button>
);
