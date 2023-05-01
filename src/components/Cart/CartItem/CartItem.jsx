import React from "react";
import {
  addToCart,
  removeEntireProduct,
  removeOneProduct,
} from "../../../feature/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSingleProduct } from "../../../feature/slices/productsSlice";

const CartItem = ({ product, onClose }) => {
  const { id, name, img, size, color, amount, price, totalPrice, type } =
    product;

  const dispatch = useDispatch();

  const handleClick = () => {
    onClose(false);
    dispatch(getSingleProduct(id));
  };

  return (
    <div className="w-full border-b-2 border-black border-solid grid shadow-custom_img rounded-md mobile:h-72">
      <h4 className="text-white rounded-t-lg bg-gray-900 font-inter text-center font-bold tracking-normal leading-none pt-2 pb-2 text-lg capitalize">
        {name}
      </h4>
      <div className="rounded-b-lg bg-black/20 flex flex-col items-center mobile:flex-row gap-4 overflow-hidden">
        <Link
          to={`/filter/${type}/${id}`}
          onClick={handleClick}
          className="h-auto min-w-[190px] max-w-[190px] block py-2 pl-2"
        >
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={img}
            alt={name}
          ></img>
        </Link>
        <div className="h-full w-full py-4 px-4 pt-0 mobile:py-4 mobile:px-2">
          <div className="h-full flex border-2 border-gray-900 bg-[lavender] rounded-2xl p-2 flex-wrap justify-start content-between items-start flex-col w-full gap-4 mobile:text-center mobile:justify-between mobile:text-center text-lg font-bold sm:flex-row sm:text-start">
            <div className="flex flex-col items-start gap-1">
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
            <div className="flex flex-wrap justify-between w-full">
              <div className="flex gap-4 items-center">
                <button
                  className="font-semibold text-2xl w-12 h-12 p-2 hover:scale-125 focus-visible:scale-125 active:scale-90 duration-200"
                  onClick={() => dispatch(addToCart(product))}
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 44"
                    fill="black"
                    enableBackground="new 0 0 44 44"
                    className="w-full h-full hover:fill-green-800 focus-visible:fill-green-600"
                  >
                    <path d="M22,0C9.8,0,0,9.8,0,22s9.8,22,22,22s22-9.8,22-22S34.2,0,22,0z M34,23c0,0.6-0.4,1-1,1h-8.5c-0.3,0-0.5,0.2-0.5,0.5V33  c0,0.6-0.4,1-1,1h-2c-0.6,0-1-0.4-1-1v-8.5c0-0.3-0.2-0.5-0.5-0.5H11c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h8.5  c0.3,0,0.5-0.2,0.5-0.5V11c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v8.5c0,0.3,0.2,0.5,0.5,0.5H33c0.6,0,1,0.4,1,1V23z" />
                  </svg>
                </button>
                <button
                  className="font-semibold text-2xl w-12 h-12 p-2 hover:scale-125 focus-visible:scale-125 active:scale-90 duration-200"
                  onClick={() => dispatch(removeOneProduct(product))}
                >
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 16 16"
                    fill="black"
                    className="w-full h-full hover:fill-red-800 focus-visible:fill-green-600"
                  >
                    <path d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z M12,9H4V7h8V9z" />
                  </svg>
                </button>
              </div>
              <div className="text-center">
                <button
                  className="w-12 h-12 p-2 hover:scale-125 focus-visible:scale-125 active:scale-90 duration-200"
                  onClick={() => dispatch(removeEntireProduct(product))}
                >
                  <svg
                    enableBackground="new 0 0 32 32"
                    id="Glyph"
                    version="1.1"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="gray"
                    className="hover:fill-black focus-visible:fill-black "
                  >
                    <path
                      d="M6,12v15c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V12H6z M12,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9  c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M17,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M22,25  c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z"
                      id="XMLID_237_"
                    />
                    <path
                      d="M27,6h-6V5c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v1H5C3.897,6,3,6.897,3,8v1c0,0.552,0.448,1,1,1h24  c0.552,0,1-0.448,1-1V8C29,6.897,28.103,6,27,6z M13,5c0-0.551,0.449-1,1-1h4c0.551,0,1,0.449,1,1v1h-6V5z"
                      id="XMLID_243_"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
