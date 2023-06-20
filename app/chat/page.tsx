import { Container } from "@/components/ui/Container";
import React from "react";

interface ChatPageProps {}

export default function ChatPage({}) {
  return (
    <Container>
      <div className="w-[8rem] h-[40rem] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-tl-3xl rounded-bl-3xl flex flex-col items-center"></div>
      <div className="w-[20rem] h-[40rem] bg-white flex flex-col items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
        <div className=" w-full h-10 flex justify-center items-center mt-3 text-lg tracking-wider">
          Members
        </div>
        <div className="border-2 w-full h-96">
          <ul className="flex flex-col items-center">
            <li className="h-14 border-2 w-full flex items-center justify-center">
              1
            </li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </div>
      </div>
      <div className="w-[45rem] h-[40rem] bg-white rounded-tr-3xl rounded-br-3xl flex flex-col items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"></div>
    </Container>
  );
}
