import { AuthForm } from "@/components/AuthForm";
import { Container } from "../components/ui/Container";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="w-[42rem] h-[35rem] shadow-lg shadow-black rounded-2xl bg-white flex items-center flex-col justify-around font-robotoCondensed">
        <Image
          src="/sonup.png"
          alt="sonup-logo"
          width={200}
          height={100}
          className=" pt-4"
        />
        <AuthForm />
      </div>
    </Container>
  );
}