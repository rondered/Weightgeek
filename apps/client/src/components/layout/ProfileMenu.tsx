import React from "react";
import { CgProfile as ProfileIcon } from "react-icons/cg";
import { useSession } from "@/hooks";

export const ProfileMenu: React.FC<{}> = () => {
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
        className={`transition-all items-center justify-center flex overflow-hidden absolute w-[150px] right-0 p-4 top-[80px] rounded shadow bg-white mr-[10px] ${
          open ? "h-[40px]" : "h-0 p-0"
        }`}
      >
        <div onClick={logout}>disconnect</div>
      </div>
    </>
  );
};
