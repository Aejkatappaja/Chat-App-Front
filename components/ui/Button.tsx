import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`${className} w-[32rem] h-14 rounded-xl flex items-center justify-center bg-orange text-white font-bold text-lg tracking-wider active:translate-y-1`}
    >
      {children}
    </button>
  );
};
