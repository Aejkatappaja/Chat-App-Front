"use client";
import { Container } from "@/components/ui/Container";
import React from "react";
import Image from "next/image";
import { Nav } from "@/components/nav/Nav";

export default function ChatPage({}) {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  return (
    <Container>
      <Nav />

      <div className="w-[65rem] h-[40rem] bg-none rounded-tr-3xl rounded-br-3xl flex shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="w-96  border-gray-200 bg-white rounded-tr-3xl rounded-br-3xl">
          <div className="flex items-center h-28 justify-center ">Test</div>
        </div>

        <div className=" w-[42rem] ml-2 rounded-tr-3xl rounded-br-3xl">
          <div className="flex items-center h-28 justify-end pr-4 rounded-tl-3xl rounded-tr-3xl bg-white">
            <Image
              src="/chat-logo.png"
              alt="sonup-logo"
              width={70}
              height={50}
              className="mr-3"
            />
          </div>
          <div className="h-[33rem] rounded-br-3xl rounded-bl-3xl bg-white"></div>
        </div>
      </div>
    </Container>
  );
}
