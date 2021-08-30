import React from "react";
import { MainContainer } from "@/components/layout";
import { CgSpinner as SpinnerIcon } from "react-icons/cg";

export const Loading = () => {
  return (
    <MainContainer>
      <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
        <SpinnerIcon className="animate-spin h-[300px] w-[300px] fill-current text-blue-500" />
        <div className="absolute text-white">Please wait...</div>
      </div>
    </MainContainer>
  );
};
