import React from "react";

interface IMainContainer {
  children?: React.ReactNode;
}
export const MainContainer: React.FC<IMainContainer> = (props) => {
  return (
    <div className="w-screen h-screen min-w-[359px] font-basier bg-gray-100 text-gray-900">
      {props.children}
    </div>
  );
};
