import React from "react";
import { RiMenu3Fill as SidebarIcon } from "react-icons/ri";
import { useSidebar, useMenuItems, useSession } from "@/hooks";
import { Link, useLocation } from "wouter";
import {
  FiLogOut as LogoutIcon,
  FiSettings as SettingsIcon,
} from "react-icons/fi";

const NavbarLink: React.FC<{
  name: string;
  icon?: React.ReactNode;
  path: string;
  active: boolean;
}> = (props) => {
  const { name, icon, path, active } = props;

  return (
    <Link to={path}>
      <div
        className={`w-full flex cursor-pointer
        hover:(bg-gray-500) transition-all
        py-4
        px-3
        flex items-center flex-row gap-[20px]
        ${
          active &&
          "bg-gray-400 hover:(bg-gray-400) font-bold stroke-2 stroke-current border-r-4 border-[#F761A1]"
        }
        `}
      >
        <div>{name}</div>
      </div>
    </Link>
  );
};

export const Navbar = () => {
  const { toggleSidebar, sidebar } = useSidebar();
  const [location] = useLocation();
  const { items } = useMenuItems();

  return (
    <>
      <div className="hidden h-screen w-[260px] md:(flex flex-none flex-col justify-between) bg-gray-600 text-white">
        <div className="logo pt-4 px-4 fixed p-5">logo</div>
        <div className="links flex gap-[10px] flex-col mt-[120px]">
          {items.map((item: any) => (
            <NavbarLink {...item} active={location === item.path} />
          ))}
        </div>
        <div className="footer p-5 bg-gray-700">
          <div className="flex flex-row items-center">
            <div className="icon-log-out mr-[20px]" />
            <div>Logout</div>
          </div>
        </div>
      </div>
    </>
  );
};
