"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const [isOpen, SetIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    SetIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-2">
        <div
          onClick={() => {}}
          className="hidden md:block rounded-full hover:bg-neutral-100 py-1 transition cursor-pointer font-semibold px-2 text-sm"
        >
          Room Your Home
        </div>
        <div
          onClick={toggleOpen}
          className=" flex py-1 flex-row border-neutral-200 border-[1px] items-center px-2 gap-2 rounded-full cursor-pointer"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md overflow-hidden right-0 top-12 w-[40vw] md:w-3/4 text-sm bg-white">
          <div className="flex flex-col cursor-pointer">
            <MenuItem onClick={() => {}} label="Login" />
            <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
