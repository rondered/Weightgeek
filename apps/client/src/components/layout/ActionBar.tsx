import React from "react";

interface IActionBar {
  children?: React.ReactNode;
}

export const ActionBar: React.FC<IActionBar> = (props) => (
  <div className="bg-gray-50 p-5 border-b-2">{props.children}</div>
);
