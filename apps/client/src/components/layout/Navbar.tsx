import React from "react";
import { RiMenu3Fill as SidebarIcon } from "react-icons/ri";
import { useSidebar } from "../../hooks";
import { Sidebar } from "./Sidebar";

const Links = ["Dashboard", "Projects", "Team"];

const SidebarButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => (
  <button className="md:hidden text-gray-900 fill-current flex items-center" {...props}>
    <SidebarIcon size="20"/>
  </button>
);

export const Navbar = () => {
  const { toggleSidebar, sidebar } = useSidebar();

  return (
    <>
      <div className="w-screen top-0 sticky bg-white p-5 flex items-center justify-between shadow-md h-[70px] z-50">
        <div>logo</div>
        <div className="hidden md:(inline-flex flex-row divide-x divide-gray-300)">
          {Links.map(link => <div className="h-[40px] pl-12 pr-12 flex items-center justify-center box-content hover:(text-red-500 bg-gray-100)">link</div>)}
        </div>
        <SidebarButton onClick={toggleSidebar} />
      </div>
      <Sidebar isOpen={sidebar} toggle={toggleSidebar} />
    </>
  );
};
