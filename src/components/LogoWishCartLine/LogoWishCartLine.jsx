import React from "react";
import logo from "../../assets/images/logo.webp";
import { FavoriteIcon } from "../FavoriteIcon";
import { Link } from "react-router-dom";
import { ShowCart } from "./ShowCart";

const LogoWishCartLine = () => {
  return (
    <div className="flex justify-around items-center py-2 flex-col mobile:flex-row">
      <Link
        to="/clothing_store"
        className="w-[80px] h-[80px]"
        rel="preload"
        as="image"
      >
        <img className="object-cover h-full" src={logo} alt="store" />
      </Link>
      <div className="flex items-start mobile:items-center gap-y-2 h-[50px]">
        <div className="flex flex-row items-center h-full]">
          <FavoriteIcon tag="link">
            <p className="min-w-max font-medium tracking-normal leading-none text-center">
              Wish list
            </p>
          </FavoriteIcon>
        </div>
        <ShowCart />
      </div>
    </div>
  );
};

export default LogoWishCartLine;
