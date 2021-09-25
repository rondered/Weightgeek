import React from "react";

interface IFormAlert {
  message: string;
  variation: "error";
}

const variationConfig = {
  error: { icon: <IconGgBlock className="w-[20px] h-[20px]" />, ring: "ring-red-400" },
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



<IconGgFacebook className="w-[24px] h-[24px]"/>
