import React from "react";
import IconSwitcher from "./IconSwitcher";
import useNavContent from "@/state/navStore";

interface NavButtonProps {
  variant: string;
}

export const NavButton: React.FC<NavButtonProps> = ({ variant }) => {
  const { handleClick, activeButton } = useNavContent();
  return (
    <div
      className={
        variant === activeButton
          ? "bg-[pink] w-16 h-16 rounded-xl flex justify-center items-center text-white text-3xl font-bold shadow-inner shadow-black duration-1000 hover:cursor-pointer"
          : "w-16 h-16 shadow-nav flex items-center justify-center rounded-xl duration-1000 hover:cursor-pointer"
      }
      onClick={() => {
        handleClick(variant), activeButton === variant && handleClick("");
      }}
    >
      <IconSwitcher variant={variant} />
    </div>
  );
};
