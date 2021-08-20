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
  facebook: 'facebook',
  google: 'google',
};

export const SocialLoginButton: React.FC<IFormButton> = (props) => {
  return (
    <div
      className={`rounded-full flex items-center justify-center h-[60px] w-[60px] text-white bg-${
        socialIconsBackground[props.variation]
      }`}
    >
      {socialIcons[props.variation]}
    </div>
  );
};
