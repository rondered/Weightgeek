import React from "react";
import tw, { css } from "twin.macro";

interface IFormDivider {
  text?: string;
}
const Divider = () => <div css={tw`h-px bg-gray-600 w-full`} />;

export const FormDivider: React.FC<IFormDivider> = (props) => (
  <div css={tw`flex items-center h-10 w-full`}>
    <Divider />
    <div css={tw`pl-4 pr-4`}> {props.text}</div>
    <Divider />
  </div>
);
