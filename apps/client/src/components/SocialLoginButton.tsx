import React from "react";
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

export const SocialLoginButton: React.FC<IFormButton> = (props) => {
  const socialIcons = {
    facebook: <FacebookIcon />,
    google: <GoogleIcon />,
  };

  const socialIconsBackground = {
    google: "red-500",
    facebook: "[#DB4437]",
  };

  return (
    <div
      className={`bg-${socialIconsBackground[props.variation]} rounded-full flex items-center justify-center h-[60px] w-[60px] text-white`}
    >
      {socialIcons[props.variation]}
    </div>
  );
};
