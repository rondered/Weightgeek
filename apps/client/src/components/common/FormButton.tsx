import React from "react";
import { ReactComponent as SpinnerIcon } from "@/assets/icons/spinner.svg";

interface IFormButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  text?: string;
}

export const FormButton: React.FC<IFormButton> = (props) => (
  <button className="btn-primary justify-center">
    {props.isLoading ? <SpinnerIcon className="animate-spin" /> : props.text}
  </button>
);
