import React from "react";
import { LogoWishCartLine } from "../LogoWishCartLine";
import { ButtonsNavigate } from "../Buttons/ButtonsNavigate";
import { useLocation } from "react-router-dom";

const HeaderPage = () => {
  let { pathname } = useLocation();

  return (
    <>
      {pathname !== "/" && (
        <div>
          <LogoWishCartLine />
          <ButtonsNavigate back={true} />
        </div>
      )}
    </>
  );
};

export default HeaderPage;
