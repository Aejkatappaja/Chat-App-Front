import React from "react";

interface ChatContainerProps {
  children: React.ReactNode;
}

export const ChatContainer: React.FC<ChatContainerProps> = ({ children }) => {
  return (
    <div className="w-[68rem] h-[40rem] bg-none rounded-tr-3xl rounded-br-3xl flex justify-between relative">
      {children}
    </div>
  );
};
