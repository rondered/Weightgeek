import React from "react";
interface IFormButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  text?: string;
}

export const FormButton: React.FC<IFormButton> = (props) => (
  <button className="btn-primary justify-center">
    {props.isLoading ? (
      <IconGgSpinner className="animate-spin h-[24px] w-[24px]" />
    ) : (
      props.text
    )}
  </button>
);
