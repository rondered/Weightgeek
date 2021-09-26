import React from "react";

interface IFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  isInvalid?: boolean;
  errorMessage?: boolean;
}

export const FormInput = React.forwardRef((props: IFormInput, ref) => {
  const { icon, isInvalid, errorMessage, ...inputProps } = props;

  return (
    <div className="flex w-full h-[50px] flex-col">
      <div className="flex">
        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center text-textColor">
          {icon}
        </div>
        <input
          className={`input-field pl-10 -ml-10 text-base w-full text-textColor ${
            isInvalid && `custom-ring ring-red-400`
          }`}
          {...inputProps}
        />
      </div>
      {isInvalid && (
        <div className="relative bottom-[20px] text-right font-light pr-2 pb-2 text-xs text-red-400 font-semibold">
          {errorMessage}
        </div>
      )}
    </div>
  );
});
