import React from "react";
import { Divider } from "@chakra-ui/react";
import styled from "styled-components";

interface IFormDivider {
  text?: string;
}

const FormDividerContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const FormDividerText = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  font-size: 15px;
`;

export const FormDivider: React.FC<IFormDivider> = (props) => (
  <FormDividerContainer>
    <Divider />
    <FormDividerText>{props.text}</FormDividerText>
    <Divider />
  </FormDividerContainer>
);
