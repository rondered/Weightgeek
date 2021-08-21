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
  const { variation, message } = props;

  return (
    <div
      className={`flex border border-${backgroundForVariation[variation]} rounded-lg items-center justify-between transition duration-1000 p-3 bg-${backgroundForVariation[variation]}`}
    >
      {message}
      {iconForVariation[variation]}
    </div>
  );
};
