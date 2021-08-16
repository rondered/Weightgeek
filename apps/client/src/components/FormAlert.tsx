import React from "react";
import tw, { styled } from "twin.macro";

interface IFormAlert {
  message: string;
  variation?: string;
}

export const FormAlert: React.FC<IFormAlert> = (props) => {
  return (
    <div css={tw`pt-2 pb-2 pl-4 pr-4 rounded-lg bg-red-100`}>
      {props.message}
    </div>
  );
};
