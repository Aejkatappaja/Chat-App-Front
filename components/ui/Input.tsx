import React from "react";

interface InputProps {
  htmlFor: string;
  spanTitle: string;
  id: string;
  type: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  icon?: React.ReactElement;
}

export const Input: React.FC<InputProps> = ({
  htmlFor,
  spanTitle,
  id,
  type,
  onChange,
  icon,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="border-4 w-[32rem] text-orange border-sonup h-14 rounded-xl flex items-center justify-center relative"
    >
      <span className="bg-white px-1 absolute bottom-10 left-5 text-sonup font-bold tracking-wider">
        {spanTitle}
      </span>
      <input
        id={id}
        type={type}
        className="w-[90%] outline-none"
        onChange={onChange}
      />
      {icon}
    </label>
  );
};
