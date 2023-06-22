import React from "react";

export const Spinner = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="animate-spin inline-block w-12 h-12 border-4 border-current border-t-transparent text-orange rounded-full"
        role="status"
        aria-label="loading"
      ></div>
      <span className="font-base text-sonup tracking-widest">Loading...</span>
    </div>
  );
};
