import React from "react";
import { Flex, Divider, Spacer } from "@chakra-ui/react";
import styled from "styled-components";

const LoginDividerContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const LoginDividerText = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`;

export const LoginDivider = () => (
  <LoginDividerContainer>
    <Divider isFullWidth />
    <LoginDividerText>OR</LoginDividerText>
    <Divider isFullWidth />
  </LoginDividerContainer>
);
