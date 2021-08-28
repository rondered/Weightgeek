import React from "react";
import { CgProfile as ProfileIcon } from "react-icons/cg";
import { useSession } from "@/hooks";
import { MouseEventHandler } from "react";

const ProfileMenuItem: React.FC<{ text: string; onClick: MouseEventHandler }> =
  (props) => {
    return (
      <div className="cursor-pointer py-2" onClick={props.onClick}>
        <div className="link" >{props.text}</div>
      </div>
    );
  };

export const ProfileMenu: React.FC<{}> = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const { logout } = useSession();

  const items = [
    { text: "Settings", onClick: logout },
    { text: "Logout", onClick: logout },
  ];

  return (
    <>
      <ProfileIcon
        onClick={() => {
          setOpen(!open);
        }}
        className="rounded-full h-[35px] w-[35px] hover:(custom-ring) cursor-pointer"
      />
      <div
        className={`transition-all divide-y items-center justify-center flex flex-col overflow-hidden absolute right-0 top-[80px] card mr-[10px] ${
          open ? "h-auto p-x-2 p-y-2" : "h-0 p-0"
        }`}
      >
        {items.map((item) => (
          <ProfileMenuItem {...item} key={`${item.text}_profile_menu_item`} />
        ))}
      </div>
    </>
  );
};
