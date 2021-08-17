import React from "react";
import tw, { theme, styled } from "twin.macro";

interface IMainContainer {
  children?: React.ReactNode;
}

const Container = styled.div`
  ${tw`w-full bg-purple-900 text-fontColor min-w-[375px]`}
`;

export const MainContainer: React.FC<IMainContainer> = (props) => {
  return <Container>{props.children}</Container>;
};
