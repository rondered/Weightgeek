import React from "react";
import { SignupForm } from "./components";
import { FormDivider, FormButton } from "../../components";
import { config } from "../../config";
import { FaGoogle } from "react-icons/fa";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100wh;
`;

const SignupFormContainer = styled.div`
  flex: 1;
  display: grid;
  gap: 10px;
  width: 100%;
  padding: 20px;
`;

const SignupHeader = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 25px;
  font-weight: 900;
`;

const SignupDecorationContainer = styled.div`
  flex: 2;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.mainColor};

  ${breakpoint("mobile", "tablet")`
  display: none;
  `}
`;

export const Signup = () => {
  return (
    <SignupContainer>
      <SignupFormContainer>
        <SignupHeader>Sign up</SignupHeader>
        <a href={`${config.API_URL}/google/redirect`}>
          <FormButton
            leftIcon={<FaGoogle />}
            text="Sign up with Google"
            isLoading={false}
          />
        </a>
        <FormDivider text="OR" />
        <SignupForm />
      </SignupFormContainer>
      <SignupDecorationContainer />
    </SignupContainer>
  );
};
