import React from "react";

interface INavBar {
  children?: React.ReactNode;
}

export const NavBar: React.FC<{}> = (props) => {
  return (
    <div
      className={`w-screen h-navBar border-b
      md:w-mdNavBar md:h-screen md:border-r
      bg-secondaryColor relative text-white px-[20px] py-[30px]
      border-borderColor`}
    >
      {props.children}
    </div>
  );
};
