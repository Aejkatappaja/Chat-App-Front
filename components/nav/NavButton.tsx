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
          ? "bg-[#add0de] w-16 h-16 rounded-xl flex justify-center items-center text-white text-3xl font-bold shadow-inner shadow-black duration-1000"
          : "w-16 h-16 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_1)_0px_1px_1px_0.5px] flex items-center justify-center rounded-xl duration-1000"
      }
      onClick={onClick}
    >
      <IconSwitcher variant={variant} />
    </div>
  );
};
