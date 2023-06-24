import useNavContent from "@/state/navStore";
import React from "react";

interface MenuProps {}

export const Menu: React.FC<MenuProps> = ({}) => {
  const { activeButton } = useNavContent();
  return (
    <div className="w-96 bg-gray-300 shadow-inner shadow-gray-500 rounded-tr-3xl rounded-br-3xl flex justify-end ">
      <div className="h-full w-[19.25rem] z-40 flex flex-col">
        {activeButton && (
          <h1 className=" h-28 text-xl tracking-widest text-black font-base pt-14 text-center ">
            - {activeButton} -
          </h1>
        )}
      </div>
    </div>
  );
};
