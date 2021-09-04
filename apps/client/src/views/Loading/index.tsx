import React from "react";
import { MainContainer } from "@/components/layout";
import { CgSpinner as SpinnerIcon } from "react-icons/cg";

export const Loading = () => {
  return (
    <MainContainer>
      <div className="h-screen w-screen flex items-center justify-center">
        <SpinnerIcon className="animate-spin h-[300px] w-[300px] fill-current text-white" />
        <div className="absolute text-white">Please wait...</div>
      </div>
    </MainContainer>
  );
};
