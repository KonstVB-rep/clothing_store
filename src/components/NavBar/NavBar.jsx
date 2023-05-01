import React from "react";
import { LogoWishCartLine } from "../LogoWishCartLine";

const NavBar = () => {
  return (
    <>
      <div className="bg-black p-4 w-full flex justify-center items-center ">
        <p className="text-white font-inter text-2xl font-bold uppercase">
          clothing store
        </p>
      </div>
      <LogoWishCartLine />
      <div className="bg-black p-4 w-full flex flex-col justify-center items-center justify-between mx-auto  mobile:flex-row gap-4">
        <p className="text-white font-inter text-base font-medium w-36 text-center">
          50%OFF
        </p>
        <p className="text-white font-inter text-base font-medium w-36 text-center">
          Free shipping and returns
        </p>
        <p className="text-white font-inter text-base font-medium w-36 text-center">
          Different payment methods
        </p>
      </div>
    </>
  );
};

export default NavBar;
