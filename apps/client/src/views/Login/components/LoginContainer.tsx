import React from "react";

interface ILoginContainer {
  children?: React.ReactNode;
}

export const LoginContainer: React.FC<ILoginContainer> = (props) => (
  <div className="flex h-screen">
    <div className="m-auto">
      <div className="p-8 shadow">{props.children}</div>
    </div>
  </div>
);
