import React from "react";
import logo from "assets/images/logo.webp";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-around pt-4 pb-4 gap-4 flex-wrap bg-gray-900 text-white border-t-2 border-t-gray-600">
        <div>
          <Link to="/" className="w-[80px] h-[80px]">
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
