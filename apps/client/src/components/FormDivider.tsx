import React from "react";

interface IFormDivider {
  text?: string;
}

export const FormDivider: React.FC<IFormDivider> = (props) => (
  <div className="flex items-center h-10 w-full">
    <div className="divider w-full" />
    <div className="pl-4 pr-4 text-gray-900 font-bold"> {props.text}</div>
    <div className="divider w-full" />
  </div>
);
