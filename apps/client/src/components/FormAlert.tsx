import React from "react";
import tw, { styled } from "twin.macro";

interface IFormAlert {
  message: string;
  enabled: boolean;
  variation?: string;
}

export const FormAlert: React.FC<IFormAlert> = (props) => {
  return (
    <div
      css={[
        tw`transition duration-300 pt-3 pb-3 pl-4 pr-4 rounded-lg bg-red-900`,
        props.enabled ? tw`opacity-100` : tw`opacity-0`,
      ]}
    >
      {props.message}
    </div>
  );
};
