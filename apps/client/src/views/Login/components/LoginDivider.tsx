import React from "react";
import { Flex, Divider, Spacer } from "@chakra-ui/react";
import styled from "styled-components";

const LoginDividerContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  font-decoration: underline;
`;

const LoginDividerText = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  font-size: 12px;
`;

export const LoginDivider = () => (
  <LoginDividerContainer>
    <Divider />
    <LoginDividerText>OR</LoginDividerText>
    <Divider />
  </LoginDividerContainer>
);
