import React from "react";

interface IAppContainer {
  children?: React.ReactNode;
}

export const AppContainer: React.FC<IAppContainer> = (props) => (
    <div className="max-w-md mx-auto">{props.children}</div>
);
