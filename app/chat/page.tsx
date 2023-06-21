"use client";
import { Container } from "@/components/ui/Container";
import React from "react";
import Image from "next/image";
import {
  AiOutlineMessage,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";

interface ChatPageProps {}

export default function ChatPage({}) {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const OnClick = () => setIsClicked(!isClicked);
  return (
    <Container>
      <div className="w-[8rem] h-[40rem] bg-gray-100 rounded-tl-3xl rounded-bl-3xl flex flex-col items-center justify-around">
        <div className="bg-[#add0de] w-16 h-16 rounded-xl flex justify-center items-center  text-white text-3xl font-bold shadow-inner shadow-black">
          F
        </div>
        <div className="h-96 flex flex-col items-center justify-between rounded-xl  w-16">
          <div className="w-16 h-16  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_1)_0px_1px_1px_0.5px] flex items-center justify-center rounded-xl">
            <AiOutlineHome className="w-20 h-8 text-black" />
          </div>
          <div className="w-16 h-16  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_1)_0px_1px_1px_0.5px] flex items-center justify-center rounded-xl">
            <AiOutlineMessage className="w-20 h-8 text-black" />
          </div>
          <div className="w-16 h-16 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_1)_0px_1px_1px_0.5px] flex items-center justify-center rounded-xl">
            <AiOutlineSearch className="w-20 h-8 text-black" />
          </div>
          <div
            className={
              !isClicked
                ? "w-16 h-16 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_1)_0px_1px_1px_0.5px] flex items-center justify-center rounded-xl duration-1000"
                : "bg-[#add0de] w-16 h-16 rounded-xl flex justify-center items-center  text-white text-3xl font-bold shadow-inner shadow-black duration-700"
            }
          >
            <AiOutlineSetting className="w-20 h-8" onClick={OnClick} />
          </div>
        </div>
      </div>

      <div className="w-[65rem] h-[40rem] bg-none rounded-tr-3xl rounded-br-3xl flex shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="w-96  border-gray-200 bg-white rounded-tr-3xl rounded-br-3xl">
          <div className="flex items-center h-28 justify-center ">
            {isClicked ? "SETTINGS" : "Members"}
          </div>
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
