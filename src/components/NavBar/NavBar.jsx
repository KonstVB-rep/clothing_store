import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { Cart } from "../ Cart";
import { selectTotalAmount } from "../../feature/slices/cartSlice";
import { Link } from "react-router-dom";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";

const NavBar = () => {
  const totalAmount = useSelector(selectTotalAmount);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="bg-black p-4 w-full flex justify-center items-center ">
        <p className="text-white font-inter text-2xl font-bold uppercase">
          clothing store
        </p>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <img className="h-28 w-full" src={logo} alt="store"></img>
        </div>
        <div className="flex flex-col items-center mobile:flex-row gap-4">
          <div className="flex flex-row items-center">
            <FavoriteIcon tag="link" />
            <p className="min-w-max font-medium tracking-normal leading-none text-center">
              Wish list
            </p>
          </div>
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1">
                {totalAmount}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            )}
            <p className=" font-inter text-base font-medium tracking-normal leading-none text-center ">
              Shopping bag
            </p>
            <div>
              {open && <Cart openModal={open} setOpen={handleClose}></Cart>}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black p-4 w-full flex flex-col justify-center items-center justify-between mx-auto  mobile:flex-row gap-4">
        <p className="text-white font-inter text-base font-medium w-36 text-center">
          50& OFF
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
