"use client";
import React from "react";
import navVariants from "./navVariant";
import { NavButton } from "./NavButton";

export const Nav = () => {
  const [activeButton, setActiveButton] = React.useState<string | null>(null);

  const handleClick = (variant: string) => {
    setActiveButton(variant);
  };
  return (
    <nav className="w-[8rem] h-[40rem] absolute left-[-4rem]  bg-gray-100 rounded-3xl flex flex-col items-center justify-around shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_1)_0px_1px_1px_0.5px]">
      <div className="h-[35rem] flex flex-col items-center justify-between w-16">
        {navVariants.map((variant: string) => {
          return (
            <NavButton
              key={variant}
              variant={variant}
              isActive={variant === activeButton}
              onClick={() => handleClick(variant)}
            />
          );
        })}
      </div>
    </nav>
  );
};
