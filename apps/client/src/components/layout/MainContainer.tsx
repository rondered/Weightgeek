import React from "react";

interface IMainContainer {
  children?: React.ReactNode;
}
export const MainContainer: React.FC<IMainContainer> = (props) => {
  return (
    <div className="w-screen h-screen min-w-[359px] font-basier bg-bgColor text-textColor">
      {props.children}
    </div>
  );
};
