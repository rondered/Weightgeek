import React from "react";

interface IMainContainer {
  children?: React.ReactNode;
}
export const MainContainer: React.FC<IMainContainer> = (props) => {
  return (
    <div className="w-screen h-screen text-gray-700 bg-gray-100 min-w-[359px] font-sora">
      {props.children}
    </div>
  );
};