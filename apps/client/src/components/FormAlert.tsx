import React from "react";
import { AiOutlineAlert as ErrorIcon } from "react-icons/ai";

interface IFormAlert {
  message: string;
  variation: "error";
}

const backgroundForVariation = {
  error: "red-900",
};

const iconForVariation = {
  error: <ErrorIcon size="20px" />,
};

export const FormAlert: React.FC<IFormAlert> = (props) => {
  return (
    <div
      className={`flex rounded-lg items-center justify-between transition duration-1000 p-3 bg-${
        backgroundForVariation[props.variation]
      }`}
    >
      {props.message}
      {iconForVariation[props.variation]}
    </div>
  );
};
