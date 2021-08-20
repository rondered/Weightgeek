import React from "react";
import tw, { theme, styled } from "twin.macro";

interface IMainContainer {
  children?: React.ReactNode;
}
export const MainContainer: React.FC<IMainContainer> = (props) => {
  return (
    <div className="w-screen h-screen bg-gray-900 text-white min-w-[375px]">
      {props.children}
    </div>
  );
};
