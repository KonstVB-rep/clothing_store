import React from "react";
import { Button } from "@material-tailwind/react";
import { removeFromCart } from "../../../feature/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleProduct } from "../../../feature/slices/productsSlice";

const CartItem = ({ product }) => {
  const { id, name, img, size, color, amount, price, totalPrice, type } =
    product;
  const dispatch = useDispatch();

  return (
    <div className="w-full border-b-2 border-black border-solid">
      <h4 className="text-black font-inter text-center font-bold tracking-normal leading-none pt-2 mobile_350:text-start">
        {name}
      </h4>
      <div className="grid py-4 gap-6 grid-cols-1 mobile_350:grid-cols-2 min-h-[320px]">
        <Link
          to={`/filter/${type}/${id}`}
          onClick={() => dispatch(getSingleProduct(id))}
        >
          <img
            className="rounded-md w-full h-full object-cover max-h-80"
            src={img}
            alt={name}
          ></img>
        </Link>
        <div className="text-center mobile_350:text-start">
          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
            Selected size: <span className="ml-2">{size}</span>
          </p>
          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
            Selected color:{" "}
            <span
              className="ml-2 rounded-full px-2"
              style={{ backgroundColor: color }}
            ></span>
          </p>
          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
            Amount: <span className="ml-2">{amount}</span>
          </p>
          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
            Single Item Price: <span className="ml-2">{price}$</span>
          </p>
          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
            Total Item Prices: <span className="ml-2">{totalPrice}$</span>
          </p>
          <div className="pt-4">
            <Button
              onClick={() => dispatch(removeFromCart(product))}
              size="sm"
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
