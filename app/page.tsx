import { Container } from "../components/ui/Container";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
        <form
          action=""
          className=" h-[25rem] w-full py-4 flex flex-col items-center justify-between"
        >
          <label
            htmlFor=""
            className="border-4 w-[32rem] text-orange border-sonup h-14 rounded-xl flex items-center justify-center relative "
          >
            <span className="bg-white px-1 absolute bottom-10 left-5 text-sonup font-bold tracking-wider">
              E-mail
            </span>
            <input type="email" className="w-[90%] outline-none" />
          </label>
          <label
            htmlFor=""
            className="border-2 w-[32rem] text-orange border-sonup h-14 rounded-xl flex items-center justify-center relative "
          >
            <span className="bg-white px-1 absolute bottom-10 left-5 text-sonup">
              Nickname
            </span>
            <input type="email" className="w-[90%] outline-none" />
          </label>
          <label
            htmlFor=""
            className="border-2 w-[32rem]  text-orange  border-sonup h-14 rounded-xl flex items-center justify-center relative"
          >
            <span className="bg-white px-1 absolute bottom-10 left-5 text-sonup">
              Password
            </span>
            <input type="password" className="w-[90%]" />
            <FaEyeSlash className="text-sonup text-xl" />
          </label>
          <label
            htmlFor=""
            className="border-2 w-[32rem]  text-orange  border-sonup h-14 rounded-xl flex items-center justify-center relative"
          >
            <span className="bg-white px-1 absolute bottom-10 left-5 text-sonup">
              Confirm Password
            </span>
            <input type="password" className="w-[90%] " />
            <FaEyeSlash className="text-sonup text-xl" />
          </label>
          <button className=" w-[32rem]  h-14 rounded-xl flex items-center justify-center bg-orange text-white font-bold text-lg tracking-wider active:translate-y-1 ">
            Register
          </button>
        </form>
      </div>
    </Container>
  );
}
