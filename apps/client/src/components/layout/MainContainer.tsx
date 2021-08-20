import React from "react";
import tw, { theme, styled } from "twin.macro";

interface IMainContainer {
  children?: React.ReactNode;
}
export const MainContainer: React.FC<IMainContainer> = (props) => {
  return (
    <div className="w-screen h-screen text-gray-900 bg-gray-100 min-w-[375px]">
      {props.children}
    </div>
  );
};