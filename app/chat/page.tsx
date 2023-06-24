"use client";

import React from "react";

import { MainContainer } from "@/components/ui/MainContainer";
import { ChatContainer } from "./components/ChatContainer";
import { Menu } from "./components/menu/Menu";
import { Chat } from "./components/chat/chat";
import { Nav } from "@/chat/components/nav/Nav";

export default function ChatPage() {
  return (
    <MainContainer>
      <ChatContainer>
        <Nav />
        <Menu />
        <Chat />
      </ChatContainer>
    </MainContainer>
  );
}
