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
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputValue.trim() === "") {
      setIsFocused(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <label
      htmlFor={htmlFor}
      className="w-[32rem] text-orange h-14 rounded-xl flex items-center justify-center relative"
    >
      <span
        className={`bg-white px-1 absolute left-5 text-sonup font-base tracking-wider transition-transform duration-300 ${
          isFocused || inputValue.trim() !== ""
            ? " transition-transform translate-y-[-1.7rem] duration-500"
            : ""
        } `}
      >
        {spanTitle}
      </span>
      <input
        id={id}
        type={type}
        className="w-full h-full outline-none tracking-wider border-2 rounded-xl border-sonup pl-5 focus:border-4"
        onChange={(event) => {
          handleInputChange(event);
          onChange?.(event);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {icon}
    </label>
  );
};
