import React from "react";
import IconSwitcher from "./IconSwitcher";

interface NavButtonProps {
  variant: string;
  isActive: boolean;
  onClick: () => void;
}

export const NavButton: React.FC<NavButtonProps> = ({
  variant,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={
        isActive
          ? "bg-[pink] w-16 h-16 rounded-xl flex justify-center items-center text-white text-3xl font-bold shadow-inner shadow-black duration-1000 hover:cursor-pointer"
          : "w-16 h-16 shadow-nav flex items-center justify-center rounded-xl duration-1000 hover:cursor-pointer"
      }
      onClick={onClick}
    >
      <IconSwitcher variant={variant} />
    </div>
  );
};
