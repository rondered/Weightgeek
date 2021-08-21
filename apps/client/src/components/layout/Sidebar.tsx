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
      } h-screen transition-all bg-gray-800 top-0 right-0 absolute md:(hidden) z-10 duration-500`}
    >
      {props.isOpen && (
        <div className="p-5">
          <button className="cursor-pointer w-min p-4">
            <CloseIcon onClick={props.toggle} size="20" />
          </button>
        </div>
      )}
    </div>
  );
};
