import React from "react";
import { RiCloseFill as CloseIcon } from "react-icons/ri";

interface ISidebar {
  isOpen: boolean;
  toggle: any;
}

export const Sidebar: React.FC<ISidebar> = (props) => {
  return (
    <div
      className={`${
        props.isOpen ? "w-screen" : "w-0"
      } h-screen transition-all bg-blue-500 top-navBar right-0 absolute md:(hidden) duration-500 z-10`}
    >
      {props.isOpen && (
        <div className="p-5">
          <button className="cursor-pointer w-min p-4" onClick={props.toggle}>
            <CloseIcon size="20" color="white" />
          </button>
        </div>
      )}
    </div>
  );
};
