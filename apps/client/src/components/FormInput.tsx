import React from "react";
import tw, { styled } from "twin.macro";

interface IFormInput {
  icon?: React.ReactNode;
  isInvalid?: boolean;
  errorMessage?: boolean;
}

export const FormInput: React.FC<IFormInput> = (props) => {
  return (
    <div className="flex w-full h-[50px] flex-col text-xs">
      <div className="flex">
        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
          {props.icon}
        </div>
        <input
          className="p-3 pl-10 -ml-10 border border-gray-600 text-base w-full bg-gray-900 placeholder-white transition-colors duration-1000"
          {...props}
        />
      </div>
      {props.isInvalid && (
        <div className="relative bottom-[20px] text-right font-light pr-2 pb-2 text-xs text-red-400">
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};
