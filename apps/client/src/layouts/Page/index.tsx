import React from "react";
import {MainContainer} from "@/components/layout";
import {NavBar} from "@/components/layout";

interface IPage {
  children?: React.ReactNode;
}

export const Page: React.FC<IPage> = (props) => {
  return (
    <MainContainer>
      <div className="flex flex-col md:flex-row">
        <NavBar>hi</NavBar>
        <div className="flex flex-col p-5 w-full gap-[20px]">
          {props.children}
        </div>
      </div>
    </MainContainer>
  );
};
