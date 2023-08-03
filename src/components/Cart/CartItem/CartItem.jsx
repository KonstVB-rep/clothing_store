import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeEntireProduct,
  removeOneProduct,
} from "feature/slices/cartSlice";
import { getSingleProduct } from "feature/slices/productsSlice";
import { MdDeleteForever } from "react-icons/md";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

const CartItem = memo(({ product }) => {
  const { id, name, img, size, color, amount, price, totalPrice, type } =
    product;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getSingleProduct(id));
  };

  return (
    <div className="w-full border-b-2 border-black border-solid grid shadow-custom_img rounded-md mobile:h-72">
      <h4 className="text-white rounded-t-lg bg-gray-900 font-inter text-center font-bold tracking-normal leading-none pt-2 pb-2 text-lg capitalize">
        {name}
      </h4>
      <div className="rounded-b-lg bg-black/20 flex flex-col items-center mobile:flex-row gap-4 overflow-hidden">
        <Link
          to={`filter/${type}/${id}`}
          onClick={handleClick}
          className="h-full min-w-[190px] max-w-[190px] block py-2 pl-2"
        >
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={img}
            alt={name}
          ></img>
        </Link>
        <div className="h-full w-full py-4 px-4 pt-0 mobile:py-4 mobile:px-2">
          <div className="h-full flex border-2 border-gray-900 bg-[lavender] rounded-2xl p-2 flex-wrap justify-start content-between items-start flex-col w-full gap-4 mobile:text-center mobile:justify-between mobile:text-center text-lg font-bold sm:flex-row sm:text-start">
            <div className="flex flex-col items-start gap-2">
              <p className="text-black leading-none capitalize">
                Size:<span className="ml-2 font-medium">{size}</span>
              </p>
              <p className="text-black font-inter tracking-normal leading-none capitalize">
                Color:
                <span
                  className="ml-2 rounded-full px-2 font-medium"
                  style={{ backgroundColor: color }}
                ></span>
              </p>
              <p className="text-black font-inter tracking-normal leading-none capitalize">
                Amount:<span className="ml-2 font-medium">{amount}</span>
              </p>
              <p className="text-black font-inter tracking-normal leading-none capitalize">
                Price:<span className="ml-2 font-medium">{price}$</span>
              </p>
              <p className="text-black font-inter tracking-normal leading-none capitalize">
                Total price:
                <span className="ml-2 font-medium">{totalPrice}$</span>
              </p>
            </div>
            <div className="flex flex-col flex-wrap items-center mobile_350:flex-row mobile_350:justify-between w-full">
              <div className="flex gap-4 items-center">
                <button
                  className="font-semibold text-2xl w-12 h-12 p-2 hover:scale-125 focus-visible:scale-125 active:scale-90 duration-200"
                  onClick={() => dispatch(addToCart(product))}
                >
                  <FaCirclePlus className="w-full h-full hover:text-green-800 focus-visible:text-green-600" />
                </button>
                <button
                  className="font-semibold text-2xl w-12 h-12 p-2 hover:scale-125 focus-visible:scale-125 active:scale-90 duration-200"
                  onClick={() => dispatch(removeOneProduct(product))}
                >
                  <FaCircleMinus className="w-full h-full hover:text-red-800 focus-visible:text-green-600" />
                </button>
              </div>
              <div className="text-center">
                <button
                  className="w-12 h-12 p-1 hover:scale-125 focus-visible:scale-110 active:scale-90 duration-200"
                  onClick={() => dispatch(removeEntireProduct(product))}
                >
                  <MdDeleteForever className="w-full h-full hover:text-black focus-visible:text-black active:text-red-800" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CartItem;
