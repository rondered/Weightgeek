import React from "react";
import { RiMenu3Fill as SidebarIcon } from "react-icons/ri";
import { useSidebar, useMenuItems, useSession } from "../../hooks";
import { Sidebar } from "./Sidebar";
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

  const { profilePhoto } = useSession();

  const ProfileAvatar: React.FC<{}> = () => (
    <>
      <img
        className="rounded-full h-[40px] w-[40px] hover:(custom-ring) cursor-pointer"
        src={profilePhoto}
      />
      <div className="absolute h-[40px] w-[140px] p-4 mt-[60px] rounded shadow bg-white mr-[10px]">
        lala
      </div>
    </>
  );

  return (
    <>
      <div className="w-screen top-0 sticky bg-white p-5 flex items-center justify-between shadow-md h-navBar z-50">
        <div>logo</div>
        <div className="hidden md:(inline-flex flex-row) gap-[20px]">
          {items.map((item) => (
            <Link to={item.path}>
              <div className="cursor-pointer rounded-lg h-[40px] pl-12 pr-12 flex items-center justify-center box-content hover:(text-blue-500 bg-gray-50 custom-ring)">
                {item.name}
              </div>
            </Link>
          ))}
          <ProfileAvatar />
        </div>
        <div className="inline-flex gap-[20px] flex-row md:(hidden)">
          <ProfileAvatar />
          <SidebarButton onClick={toggleSidebar} />
        </div>
      </div>
      <Sidebar isOpen={sidebar} toggle={toggleSidebar} />
    </>
  );
};
