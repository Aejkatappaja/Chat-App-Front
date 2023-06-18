import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={`${className} w-[32rem] h-14 rounded-xl shadow-sm shadow-sonup flex items-center justify-center bg-orange text-white font-bold text-lg tracking-wider active:translate-y-1`}
      {...rest}
    >
      {children}
    </button>
  );
};
