import React from "react";
import { RiMenu3Fill as SidebarIcon } from "react-icons/ri";
import { useSidebar, useMenuItems, useSession } from "@/hooks";
import { Sidebar, ProfileMenu } from "@/components/layout";
import { Link } from "wouter";

const SidebarButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => (
  <button
    className="md:hidden text-gray-900 fill-current flex items-center"
    {...props}
  >
    <SidebarIcon size="20" />
  </button>
);

export const Navbar = () => {
  const { toggleSidebar, sidebar } = useSidebar();

  const { items } = useMenuItems();

  return (
    <>
      <div className="w-screen top-0 sticky bg-white p-5 flex items-center justify-between shadow-md h-navBar z-50">
        <div>logo</div>
        <div className="hidden md:(inline-flex flex-row items-center) gap-[20px]">
          {items.map((item) => (
            <Link to={item.path}>
              <div className="cursor-pointer rounded-lg h-[40px] pl-12 pr-12 flex items-center justify-center box-content hover:(text-blue-500 bg-gray-50 custom-ring)">
                {item.name}
              </div>
            </Link>
          ))}
          <ProfileMenu />
        </div>
        <div className="inline-flex gap-[20px] flex-row md:(hidden)">
          <SidebarButton onClick={toggleSidebar} />
        </div>
      </div>
      <Sidebar isOpen={sidebar} toggle={toggleSidebar} />
    </>
  );
};
