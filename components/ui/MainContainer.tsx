import React from "react";

interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <section className="flex justify-center items-center h-[100vh]">
      {children}
    </section>
  );
};
