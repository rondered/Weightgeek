import React from "react";

interface IFormDivider {
  text?: string;
}

export const FormDivider: React.FC<IFormDivider> = (props) => (
  <div className="flex items-center h-10 w-full">
    <div className="h-px bg-gray-600 w-full" />
    <div className="pl-4 pr-4"> {props.text}</div>
    <div className="h-px bg-gray-600 w-full" />
  </div>
);
