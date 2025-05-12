import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/images/Logo.avif";

const TopBar = () => {
  return (
    <div className=" flex justify-between p-8">
      <Image src={Logo} alt="Logo" priority className="w-19 h-10" />
      <div className="flex justify-center items-center">
        <ul className="flex font-semibold text-xl space-x-1 cursor-pointer">
          <li>Home,</li>
          <li>Works,</li>
          <li>About,</li>
          <li>Blog,</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
