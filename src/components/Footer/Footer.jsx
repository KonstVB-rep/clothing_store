import React from "react";
import logo from "../../assets/images/logo.webp";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex items-center justify-around pt-4 pb-4 gap-4 flex-wrap bg-gray-900 text-white">
        <div>
          <Link to="clothing_store" className="w-[80px] h-[80px]">
            <img className="h-20 rounded-2xl" src={logo} alt="logo"></img>
          </Link>
        </div>
        <div>
          <p className="text-sm font-inter no-underline normal-case">
            Copyright {year}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
