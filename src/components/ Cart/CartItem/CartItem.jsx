import React from "react";
import { Button } from "@material-tailwind/react";
import { removeFromCart } from "../../../feature/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSingleProduct } from "../../../feature/slices/productsSlice";

const CartItem = ({ product }) => {
  const { id, name, img, size, color, amount, price, totalPrice, type } =
    product;
  const dispatch = useDispatch();

  return (
    <div className="w-full border-b-2 border-black border-solid grid shadow-custom_img rounded-md max-w-max">
      <h4 className="text-black font-inter text-center font-bold tracking-normal leading-none pt-2 pb-2 text-lg capitalize">
        {name}
      </h4>
      <div className="rounded-md rounded-md bg-black/20">
        <Link
          to={`/filter/${type}/${id}`}
          onClick={() => dispatch(getSingleProduct(id))}
          className="h-[260px] w-[200px] block"
        >
          <img
            className="w-full h-full object-cover"
            src={img}
            alt={name}
          ></img>
        </Link>
        <div className="flex flex-col gap-4 justify-between text-center mobile:text-start text-md p-2 ">
          <div className="flex flex-col gap-1">
            <p className="text-black leading-none capitalize">
              Size: <span className="ml-2">{size}</span>
            </p>
            <p className="text-black font-inter tracking-normal leading-none capitalize">
              Color:{" "}
              <span
                className="ml-2 rounded-full px-2"
                style={{ backgroundColor: color }}
              ></span>
            </p>
            <p className="text-black font-inter tracking-normal leading-none capitalize">
              Amount: <span className="ml-2">{amount}</span>
            </p>
            <p className="text-black font-inter tracking-normal leading-none capitalize">
              Price: <span className="ml-2">{price}$</span>
            </p>
            <p className="text-black font-inter tracking-normal leading-none capitalize">
              Total price: <span className="ml-2">{totalPrice}$</span>
            </p>
          </div>
          <div className="text-center">
            <Button
              onClick={() => dispatch(removeFromCart(product))}
              size="md"
              color="red"
              ripple={true}
              variant="filled"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
