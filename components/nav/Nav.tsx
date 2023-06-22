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
    <nav className="w-[8rem] h-[40rem] bg-gray-100 rounded-tl-3xl rounded-bl-3xl flex flex-col items-center justify-around">
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
