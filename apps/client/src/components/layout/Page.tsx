import React from "react";
import { MainContainer } from "./MainContainer";
import { Navbar } from "./Navbar";

interface IPage {
  children: React.ReactNode;
  header?: string;
}

export const Page: React.FC<IPage> = (props) => {
  return (
    <MainContainer>
      <div className="flex">
        <Navbar/>
          <div className="w-full">{props.children}</div>
      </div>
    </MainContainer>
  );
};
