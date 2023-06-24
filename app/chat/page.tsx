"use client";
import { MainContainer } from "@/components/ui/MainContainer";
import React from "react";
import Image from "next/image";
import { Nav } from "@/chat/components/nav/Nav";
import useNavContent from "@/state/navStore";
import { ChatContainer } from "./components/ChatContainer";
import { Menu } from "./components/menu/Menu";

export default function ChatPage() {
  const { activeButton, setActiveButton } = useNavContent();
  return (
    <MainContainer>
      <ChatContainer>
        <Nav />
        <Menu />
        <div className=" w-[42rem] rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ml-4">
          <div className="flex items-center h-28 justify-end pr-4 bg-white rounded-tr-3xl rounded-tl-3xl">
            <Image
              src="/chat-logo.png"
              alt="sonup-logo"
              width={70}
              height={50}
              className="mr-3"
            />
          </div>
          <div className="h-[33rem] rounded-br-3xl rounded-bl-3xl  bg-white"></div>
        </div>
      </ChatContainer>
    </MainContainer>
  );
}
