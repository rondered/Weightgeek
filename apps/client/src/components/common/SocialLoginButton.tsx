import React from "react";
import { ReactComponent as FacebookIcon } from "@/assets/icons/facebook.svg";
import { ReactComponent as GoogleIcon } from "@/assets/icons/google.svg";

interface IFormButton {
  children?: React.ReactNode;
  variation: "google" | "facebook";
}

const socialIcons = {
  facebook: {
    icon: <FacebookIcon />,
    link: "http://localhost:4444/auth/facebook/redirect",
    text: "Sign in with Facebook",
  },
  google: {
    icon: <GoogleIcon />,
    link: "http://localhost:4444/auth/google/redirect",
    text: "Sign in with Google",
  },
};

export const SocialLoginButton: React.FC<IFormButton> = (props) => {
  const { icon, link, text } = socialIcons[props.variation];

  return (
    <a href={link}>
      <div className="btn">
        {icon}
        <div>{text}</div>
      </div>
    </a>
  );
};
