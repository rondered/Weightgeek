import React from "react";
import { RiMenu3Fill as SidebarIcon } from "react-icons/ri";
import tw, { styled, css } from "twin.macro";
import { useSidebar } from "../../hooks";
import { Sidebar } from './Sidebar'; 

const Links = ["Dashboard", "Projects", "Team"];

const NavbarContainer = styled.div`
  ${tw`w-screen bg-gray-800 p-5 flex items-center justify-between`}
`;

const SidebarButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => (
  <button css={tw`md:hidden`} {...props}>
    <SidebarIcon size="20" />
  </button>
);

export const Navbar = () => {
  const { toggleSidebar, sidebar } = useSidebar();

  return (
    <>
      <NavbarContainer>
        <div>logo</div>
        <SidebarButton onClick={toggleSidebar} />
      </NavbarContainer>
      <Sidebar isOpen={sidebar} toggle={toggleSidebar} />
    </>
  );
};
