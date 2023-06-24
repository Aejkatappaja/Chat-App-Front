import React from "react";
import Image from "next/image";
import useNavContent from "@/state/navStore";
interface ChatProps {}

export const Chat: React.FC<ChatProps> = ({}) => {
  const { activeButton } = useNavContent();
  return activeButton ? (
    <div className=" w-[42rem] rounded-3xl shadow-chat bg-white">
      <div className="flex items-center h-28 justify-end pr-4 rounded-tr-3xl rounded-tl-3xl">
        <Image
          src="/chat-logo.png"
          alt="sonup-logo"
          width={70}
          height={50}
          className="mr-3"
        />
      </div>
      <div className="h-[33rem] rounded-br-3xl rounded-bl-3xl"></div>
    </div>
  ) : (
    false
  );
};
