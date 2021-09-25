import React from "react";
import { MainContainer } from "@/components/layout";
import { NavBar } from "@/components/layout";

interface IPage {
  children?: React.ReactNode;
}

export const Page: React.FC<IPage> = (props) => {
  return (
    <MainContainer>
      <div className="flex flex-row">
        <NavBar>
          hi
        </NavBar>
        {props.children}
      </div>
    </MainContainer>
  );
};
