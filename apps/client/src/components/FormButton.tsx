import React from "react";
import { CgSpinner as SpinnerIcon } from "react-icons/cg";

interface IFormButton {
  children?: React.ReactNode;
  isLoading?: boolean;
  leftIcon?: React.ReactElement;
  text?: string;
  backgroundColor?: string;
}

export const FormButton: React.FC<IFormButton> = (props) => (
  <button className="btn-primary">
    {props.isLoading ? (
      <div className="animate-spin">
        <SpinnerIcon size="30px" />
      </div>
    ) : (
      props.text
    )}
  </button>
);
