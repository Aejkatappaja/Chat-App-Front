import { Container } from "@/components/ui/Container";
import React from "react";

interface ChatPageProps {}

export default function ChatPage({}) {
  return (
    <Container>
      <div className="w-[20rem] h-[40rem] bg-white shadow-inner shadow-black rounded-3xl mr-2 flex flex-col items-center">
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
      <div className="w-[55rem] h-[40rem] bg-white shadow-inner shadow-black rounded-3xl"></div>
    </Container>
  );
}
