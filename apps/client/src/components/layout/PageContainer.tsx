import React from "react";

interface IAppContainer {
  children?: React.ReactNode;
}

export const AppContainer: React.FC<IAppContainer> = (props) => (
    <div>{props.children}</div>
);