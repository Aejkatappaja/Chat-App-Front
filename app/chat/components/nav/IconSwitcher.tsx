import React from "react";
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineMessage,
  AiOutlineSearch,
  AiOutlineHome,
} from "react-icons/ai";

interface IconSwitcherProps {
  variant: string;
}

const IconSwitcher: React.FC<IconSwitcherProps> = ({ variant }) => {
  let icon = null;
  switch (variant) {
    case "USER":
      icon = <AiOutlineUser className="w-20 h-8" />;
      break;
    case "HOME":
      icon = <AiOutlineHome className="w-20 h-8" />;
      break;
    case "CHAT":
      icon = <AiOutlineMessage className="w-20 h-8" />;
      break;
    case "SEARCH":
      icon = <AiOutlineSearch className="w-20 h-8" />;
      break;
    case "SETTINGS":
      icon = <AiOutlineSetting className="w-20 h-8" />;
      break;
    default:
      break;
  }

  return icon;
};

export default IconSwitcher;
