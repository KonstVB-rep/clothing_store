import React from "react";
import { clearCart } from "feature/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const FooterCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const totalPrice = useSelector((state) => state.cart.totalPrice);

  if (!cart.length) {
    return null;
  }

  return (
    <div className="px-4 py-6 bg-gray-900 text-white font-bold relative bottom-1 text-2xl mt-4 flex justify-between items-center gap-2">
      <div className="p-2">
        Total price:
        <span className="ml-2">{totalPrice}$</span>
      </div>
      <button
        className="w-[45px] h-[45px] hover:scale-125 focus-visible:scale-125 duration-200 relative"
        onClick={() => dispatch(clearCart())}
        aria-label="clear cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          className="absolute inset-0 w-full h-full p-2"
        >
          <path d="M12,13.5857864 L14.2928932,11.2928932 L15.7071068,12.7071068 L13.4142136,15 L15.7071068,17.2928932 L14.2928932,18.7071068 L12,16.4142136 L9.70710678,18.7071068 L8.29289322,17.2928932 L10.5857864,15 L8.29289322,12.7071068 L9.70710678,11.2928932 L12,13.5857864 Z M7,4 L7,3 C7,1.8954305 7.8954305,1 9,1 L15,1 C16.1045695,1 17,1.8954305 17,3 L17,4 L20,4 C21.1045695,4 22,4.8954305 22,6 L22,8 C22,9.1045695 21.1045695,10 20,10 L19.9198662,10 L19,21 C19,22.1045695 18.1045695,23 17,23 L7,23 C5.8954305,23 5,22.1045695 5.00345424,21.0830455 L4.07986712,10 L4,10 C2.8954305,10 2,9.1045695 2,8 L2,6 C2,4.8954305 2.8954305,4 4,4 L7,4 Z M7,6 L4,6 L4,8 L20,8 L20,6 L17,6 L7,6 Z M6.08648886,10 L7,21 L17,21 L17.0034542,20.9169545 L17.9132005,10 L6.08648886,10 Z M15,4 L15,3 L9,3 L9,4 L15,4 Z" />
        </svg>
      </button>
    </div>
  );
};

export default FooterCart;
