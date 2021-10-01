import React from "react";
import {MainContainer} from "@/components/layout";
export const Loading = () => {
  return (
    <MainContainer>
      <div className="h-screen w-screen flex items-center justify-center">
        <IconGgSpinner className="animate-spin h-[300px] w-[300px] fill-current text-primaryColor" />
        <div className="absolute text-textColor">Please wait...</div>
      </div>
    </MainContainer>
  );
};
