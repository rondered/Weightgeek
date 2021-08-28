import React from "react";
import { MainContainer } from "./MainContainer";
import { Navbar } from "./Navbar";

const PageHeader = () => <div />;

interface IPage {
  children: React.ReactNode;
  header?: string;
}

export const Page: React.FC<IPage> = (props) => {
  const { header, children } = props;

  return (
    <MainContainer>
      <Navbar />
      <div className="flex justify-center">
        <div className="p-4 flex h-full w-full flex-col gap-[10px] md:(max-w-[1000px])">
          {header && (
            <div className="text-3xl font-bold md:(text-5xl mb-[30px]) font-playfair mb-[20px]">
              {header}
            </div>
          )}
          {children}
        </div>
      </div>
    </MainContainer>
  );
};
