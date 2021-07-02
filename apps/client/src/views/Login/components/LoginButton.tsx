import React from "react";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/google.svg";

interface ILoginButton {
  children?: React.ReactNode;
  isLoading: boolean;
}

export const LoginButton: React.FC<ILoginButton> = (props) => (
  <button className="inline-flex space-x-8 p-2 items-center bg-gray-200 rounded-lg">
    <div className="w-1">
      <GoogleIcon />
    </div>
    <div>Sign In with Google</div>
  </button>
);
