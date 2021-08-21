import React from "react";

interface IFormDivider {
  text?: string;
}

export const FormDivider: React.FC<IFormDivider> = (props) => (
  <div className="flex items-center h-10 w-full">
    <div className="divider w-full" />
    <div className="text-gray-500 light text-sm mr-3 ml-3"> {props.text}</div>
    <div className="divider w-full" />
  </div>
);
