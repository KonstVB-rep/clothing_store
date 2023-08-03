import React from "react";
import { CartItem } from "../CartItem";
import { useSelector } from "react-redux";

const CartList = () => {
  const cart = useSelector((state) => state.cart.cart);

  if (!cart.length) {
    return null;
  }

  return (
    <>
      <div className="mt-2 px-4 grid w-full gap-4 max-h-[65vh] overflow-y-auto">
        {cart.map((item, index) => {
          return <CartItem key={item.img + index} product={item} />;
        })}
      </div>
    </>
  );
};

export default CartList;
