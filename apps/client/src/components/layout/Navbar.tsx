import React from "react";
import { RiMenu3Fill as SidebarIcon } from "react-icons/ri";
import { useSidebar, useMenuItems, useSession } from "@/hooks";
import { Sidebar } from "./Sidebar";
import { Link } from "wouter";
import { CgProfile as ProfileIcon } from "react-icons/cg";

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

const Profile: React.FC<{}> = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const { logout } = useSession();

  return (
    <>
      <ProfileIcon
        onClick={() => {
          setOpen(!open);
        }}
        className="rounded-full h-[35px] w-[35px] hover:(custom-ring) cursor-pointer"
      />
      <div
        className={`transition-all overflow-hidden absolute w-[80px] right-0 p-4 top-[80px] rounded shadow bg-white mr-[10px] ${
          open ? "h-[40px]" : "h-0 p-0"
        }`}
      >
        <div onClick={logout}>disconnect</div>
      </div>
    </>
  );
};

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
          <Profile />
        </div>
        <div className="inline-flex gap-[20px] flex-row md:(hidden)">
          <SidebarButton onClick={toggleSidebar} />
        </div>
      </div>
      <Sidebar isOpen={sidebar} toggle={toggleSidebar} />
    </>
  );
};
