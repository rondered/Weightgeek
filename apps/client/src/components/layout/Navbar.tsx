import React from "react";
import { RiMenu3Fill as SidebarIcon } from "react-icons/ri";
import { useSidebar } from "../../hooks";
import { Sidebar } from "./Sidebar";

const Links = ["Dashboard", "Projects", "Team"];

const SidebarButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => (
  <button className="md:hidden" {...props}>
    <SidebarIcon size="20" />
  </button>
);

export const Navbar = () => {
  const { toggleSidebar, sidebar } = useSidebar();

  return (
    <>
      <div className="w-screen bg-gray-800 p-5 flex items-center justify-between">
        <div>logo</div>
        <SidebarButton onClick={toggleSidebar} />
      </div>
      <Sidebar isOpen={sidebar} toggle={toggleSidebar} />
    </>
  );
};
