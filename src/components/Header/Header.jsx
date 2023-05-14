import React from "react";
import { LogoWishCartLine } from "../LogoWishCartLine";
import { ButtonsNavigate } from "../Buttons/ButtonsNavigate";

const Header = () => {
  return (
    <>
      <div className="bg-black p-4 w-full flex justify-center items-center ">
        <p className="text-white font-inter text-2xl font-bold uppercase">
          clothing store
        </p>
      </div>
      <LogoWishCartLine />
      <ButtonsNavigate back={true} />
    </>
  );
};

export default Header;
