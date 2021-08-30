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
        className={`w-full flex cursor-pointer rounded p-2
        hover:(bg-blue-50 text-blue-600 font-bold stroke-3 stroke-current) transition-all
        py-4
        flex items-center flex-row gap-[20px]
        ${
          active &&
          "bg-blue-100 hover:(bg-blue-100) text-blue-600 font-bold stroke-3 stroke-current"
        }
        `}
      >
        {React.createElement(icon)}
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
      <div className="hidden h-screen w-[260px] md:(flex flex-none flex-col justify-between) bg-white p-5">
        <div className="logo pt-4 px-4 fixed">logo</div>
        <div className="links flex gap-[10px] flex-col mt-[120px]">
          {items.map((item: any) => (
            <NavbarLink {...item} active={location === item.path} />
          ))}
        </div>
        <div className="footer bottom-0">
          <div className="flex flex-row gap-[10px]">
            <LogoutIcon /> Logout{" "}
          </div>
        </div>
      </div>
    </>
  );
};
