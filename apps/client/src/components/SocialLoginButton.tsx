import React from "react";
import tw, { styled, css } from "twin.macro";
import {
  FaGoogle as GoogleIcon,
  FaFacebook as FacebookIcon,
} from "react-icons/fa";

interface IFormButton {
  children?: React.ReactNode;
  icon?: React.ReactElement;
  backgroundColor?: string;
  variation: "google" | "facebook";
}

const socialIcons = {
  facebook: <FacebookIcon />,
  google: <GoogleIcon />,
};

const socialIconsBackground = {
  facebook: tw`bg-facebook`,
  google: tw`bg-google`,
};

export const SocialLoginButton: React.FC<IFormButton> = (props) => {
  return (
    <div
      css={[tw`rounded-full p-5 w-min text-white`, socialIconsBackground[props.variation]]}
    >
      {socialIcons[props.variation]}
    </div>
  );
};
