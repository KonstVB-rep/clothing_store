import React from "react";
import { Button } from "@material-tailwind/react";
import { addToCart } from "../../../feature/slices/cartSlice";
import { useDispatch } from "react-redux";

const ButtonAdd = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Button
      size="lg"
      variant="filled"
      ripple={true}
      className="text-white tex-center px-4 py-4 hover:bg-gray-300 hover:text-black focus-visible::bg-gray-300 focus-visible::text-black duration-300 ease-in-out active:bg-transparent active:text-white"
      onClick={() => dispatch(addToCart({ ...data }))}
    >
      Add to Cart
    </Button>
  );
};

export default ButtonAdd;
