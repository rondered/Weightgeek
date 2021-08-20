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
        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center text-gray-900">
          {props.icon}
        </div>
        <input
          className={`p-3 pl-10 -ml-10 border border-gray-300 rounded text-base w-full transition-colors duration-1000 text-gray-900 font-bold focus:(text-gray-900) ${
            props.isInvalid && `border-2 border-red-400 text-red-400`
          }`}
          {...props}
        />
      </div>
      {props.isInvalid && (
        <div className="relative bottom-[20px] text-right font-light pr-2 pb-2 text-xs text-red-400 font-semibold">
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};
