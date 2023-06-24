import { AuthForm } from "@/components/AuthForm";
import { MainContainer } from "../components/ui/MainContainer";
import Image from "next/image";

export default function Home() {
  return (
    <MainContainer>
      <div className="w-[42rem] h-[35rem] shadow-inner shadow-black rounded-3xl bg-white flex items-center flex-col justify-around font-robotoCondensed">
        <Image
          src="/sonup.png"
          alt="sonup-logo"
          width={200}
          height={100}
          className=" pt-4 "
        />
        <AuthForm />
      </div>
    </MainContainer>
  );
}
