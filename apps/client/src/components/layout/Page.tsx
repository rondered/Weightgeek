import React from "react";
import { MainContainer } from "./MainContainer";
import { NavBar } from "./NavBar";

interface IPage {
  children?: React.ReactNode;
}

export const Page: React.FC<IPage> = (props) => {
  return (
    <MainContainer>
      <NavBar />
      {props.children}
    </MainContainer>
  );
};
