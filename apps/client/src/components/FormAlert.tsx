import React from "react";
import { AiOutlineAlert as ErrorIcon } from "react-icons/ai";

interface IFormAlert {
  message: string;
  variation: "error";
}

const variationConfig = {
  error: { icon: <ErrorIcon size="20px" />, ring: "ring-red-400" },
};

export const FormAlert: React.FC<IFormAlert> = (props) => {
  const { variation, message } = props;
  return (
    <div
      className={`flex border rounded-lg items-center justify-between transition duration-1000 p-3 custom-ring ${
        variationConfig[variation].ring
      }`}
    >
      {message}
      {variationConfig[variation].icon}
    </div>
  );
};
