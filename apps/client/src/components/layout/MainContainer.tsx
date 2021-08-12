import React from "react";
import tw, { theme, styled } from "twin.macro";

interface IMainContainer {
  children?: React.ReactNode;
}

const Container = styled.div`
  ${tw`w-full`}
  color: ${theme`colors.fontColor`};
  background: ${theme`colors.background`};
`;

export const MainContainer: React.FC<IMainContainer> = (props) => {
  return <Container>{props.children}</Container>;
};
