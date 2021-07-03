import React from "react";

interface ILoginContainer {
  children?: React.ReactNode;
}

export const LoginContainer: React.FC<ILoginContainer> = (props) => (
  <div className="flex h-screen bg-gray-100">
    <div className="m-auto">
      <div className="p-8 shadow bg-white">
        {props.children}
        </div>
    </div>
  </div>
);
