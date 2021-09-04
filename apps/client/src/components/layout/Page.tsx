import React from "react";
import { MainContainer } from "./MainContainer";

export const Page = () => {
  return (
    <MainContainer>
      <div className="w-full bg-primary h-[200px] z-0"></div>
      <div className="p-5 w-[350px] h-full z-10 left-0 top-0">
        <div className="bg-white rounded-lg w-full h-full"></div>
      </div>
    </MainContainer>
  );
};
