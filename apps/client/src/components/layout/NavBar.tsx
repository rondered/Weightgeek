import React from "react";

interface INavBar {
  children?: React.ReactNode;
}

export const NavBar: React.FC<{}> = (props) => {
  return (
    <div className="w-navBar h-screen bg-secondaryColor relative text-white px-[20px] py-[30px]">
      {props.children}
    </div>
  );
};
