import React from "react";
import { LogoWishCartLine } from "../LogoWishCartLine";
import { ButtonsNavigate } from "../Buttons/ButtonsNavigate";
import { useLocation } from "react-router-dom";

const Header = () => {
  let { pathname } = useLocation();

  return (
    <>
      {pathname !== "https://konst1984.github.io/clothing_store/" && (
        <>
          <LogoWishCartLine />
          <ButtonsNavigate back={true} />
        </>
      )}
    </>
  );
};

export default Header;
