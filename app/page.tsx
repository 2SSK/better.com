import React from "react";
import Navbar from "./_components/Navbar/Navbar";
import Main from "./_components/Home/Main";

const page = () => {
  return (
    <div className="w-full h-screen bg-[#0f403b]">
      <Navbar className="text-white" />
      <Main />
    </div>
  );
};

export default page;
