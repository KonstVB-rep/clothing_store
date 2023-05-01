import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { getSingleProduct } from "../../../feature/slices/productsSlice";
import { Link } from "react-router-dom";
import { addToCart } from "../../../feature/slices/cartSlice";
import { ButtonGlobal } from "../../Buttons/ButtonGlobal";

const ProductMainCard = ({ product }) => {
  const { id, img, name, size, price, color, type } = product;

  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <Card className="m-auto max-w-sm relative shadow-lg shadow-black bg-gray-900 w-full rounded-3xl overflow-hidden">
      <Typography
        variant="h4"
        className="mb-2 absolute rotate-45 top-12 right-2 z-10 text-red-700"
      >
        SALE%
      </Typography>
      <CardHeader
        floated={false}
        className="m-0 static rounded-none rounded-t-lg grow h-[400px] relative"
      >
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <Link
          to={`filter/${type}/${id}`}
          className="absolute inset-0 bg-black/30 hover:bg-black/0 focus-visible:bg-black/0 duration-200"
          onClick={() => dispatch(getSingleProduct(product.id))}
        />
      </CardHeader>
      <CardBody className="text-center text-white">
        <Typography variant="h4" className="mb-2">
          {name}
        </Typography>
        <div className="flex justify-between items-center mt-4 bg-white p-2 rounded-3xl">
          <Typography color="black" className="text-2xl">
            size:
            <span className="text-base font-light ml-1 text-xl">
              {defaultSize}
            </span>
          </Typography>
          <Typography className="font-medium text-center font-semibold">
            <span
              className={`px-2 rounded-full w-10 h-4 block`}
              style={{ backgroundColor: defaultColor, color: defaultColor }}
            ></span>
          </Typography>
          <Typography
            color="red"
            className="font-medium font-bold w-[46px] text-2xl"
          >
            {price}$
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <ButtonGlobal
          title="add to cart"
          onClick={() =>
            dispatch(
              addToCart({ ...product, size: defaultSize, color: defaultColor })
            )
          }
        />
      </CardFooter>
    </Card>
  );
};

export default ProductMainCard;
