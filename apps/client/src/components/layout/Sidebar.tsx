import React from "react";
import tw, { css } from "twin.macro";
import { RiCloseFill as CloseIcon } from "react-icons/ri";

interface ISidebar {
  isOpen: boolean;
  toggle: any;
}

export const Sidebar: React.FC<ISidebar> = (props) => {
  return (
    <div
      css={[
        tw`w-screen h-screen transition-all bg-gray-800 top-0 right-0 absolute md:(hidden) z-10 duration-500`,
        !props.isOpen && tw`w-0`,
      ]}
    >
      {props.isOpen && (
        <div css={tw`p-5`}>
          <button css={tw`cursor-pointer w-min p-4`}>
            <CloseIcon onClick={props.toggle} size="20" />
          </button>
        </div>
      )}
    </div>
  );
};
