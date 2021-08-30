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
        <Navbar />
        <div className="w-full p-5 flex flex-col">
          <div className="text-3xl mb-[40px] font-bold">Logbook</div>
          <div className="">{props.children}</div>
        </div>
      </div>
    </MainContainer>
  );
};
