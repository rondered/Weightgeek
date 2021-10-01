import React from "react";

interface IFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  isInvalid?: boolean;
  errorMessage?: string;
}

export const FormInput: React.FC<IFormInput> = (props) => {
  const {icon, isInvalid, errorMessage, ...inputProps} = props;

  return (
    <div className="flex w-full h-[50px] flex-col">
      <div className="flex">
        {icon && (
          <div
            className={`w-10 z-10 pl-1
         text-center pointer-events-none
         flex items-center justify-center`}
          >
            {icon}
          </div>
        )}
        <input
          className={`input-field ${icon && "pl-10 -ml-10"} text-base w-full ${
            isInvalid && `border-red-400 border-2`
          }`}
          {...inputProps}
        />
      </div>
      {isInvalid && (
        <div
          className={`relative bottom-[20px] text-right font-light
         pr-2 pb-2 text-xs text-red-400
        font-semibold`}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};
