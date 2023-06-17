import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <section className="flex justify-center items-center h-[100vh]">
      {children}
    </section>
  );
};
