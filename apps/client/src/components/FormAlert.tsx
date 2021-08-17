import React from "react";
import tw, { styled } from "twin.macro";

interface IFormAlert {
  message: string;
  variation?: string;
}

export const FormAlert: React.FC<IFormAlert> = (props) => {
  return (
    <div css={[tw`flex transition duration-1000 p-3 bg-red-900`]}>
      {props.message}
    </div>
  );
};
