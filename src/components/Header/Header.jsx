import React from "react";
import { LogoWishCartLine } from "../LogoWishCartLine";
import { ButtonsNavigate } from "../Buttons/ButtonsNavigate";
import { useLocation } from "react-router-dom";

const Header = () => {
  let { pathname } = useLocation();

  return (
    <>
      {pathname !== "/clothing_store" && (
        <div>
          <LogoWishCartLine />
          <ButtonsNavigate back={true} />
        </div>
      )}
    </>
  );
};

export default Header;
