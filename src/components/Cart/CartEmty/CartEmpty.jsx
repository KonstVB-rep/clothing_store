import React from "react";
import { useSelector } from "react-redux";

const CartEmpty = () => {
  const cart = useSelector((state) => state.cart.cart);

  if (cart.length) {
    return null;
  }

  return (
    <div className="text-center">
      <h4 className="leading-snug text-2xl font-inter min-w-[300px] font-bold tracking-normal leading-none py-6 bg-gray-900 my-2 mb-12 px-2 text-white">
        Your bag is empty.
        <br /> Add some products
      </h4>
    </div>
  );
};

export default CartEmpty;
