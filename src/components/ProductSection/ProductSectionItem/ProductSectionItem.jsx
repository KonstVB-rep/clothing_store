import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../feature/slices/cartSlice";
import { getSingleProduct } from "../../../feature/slices/productsSlice";
import { Link } from "react-router-dom";

const ProductSectionItem = ({ product }) => {
  const { id, img, name, text, size, price, color, type } = product;

  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <Card className="m-w-96 relative shadow-lg shadow-black bg-gray-900">
      <Typography
        variant="h4"
        className="mb-2 absolute rotate-45 top-12 right-2 z-10 text-red-700"
      >
        SALE%
      </Typography>
      <CardHeader
        floated={false}
        className="m-0 static rounded-none rounded-t-lg grow h-[500px]"
      >
        <Link
          to={`/filter/${type}/${id}`}
          className="w-full"
          onClick={() => dispatch(getSingleProduct(product.id))}
        >
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </Link>
      </CardHeader>
      <CardBody className="text-center text-white">
        <Typography variant="h4" className="mb-2">
          {name}
        </Typography>
        <Typography className="font-medium">{text}</Typography>
        <div className="flex justify-between items-center mt-4 bg-white p-2 rounded-md">
          <Typography color="black" className="font-medium w-[46px]">
            size:
            <span className="text-base font-light ml-1">{defaultSize}</span>
          </Typography>
          <Typography color="black" className="font-medium text-center">
            <span
              className="px-2 rounded-full"
              style={{ backgroundColor: defaultColor }}
            />
          </Typography>
          <Typography color="red" className="font-medium font-bold w-[46px]">
            {price}$
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Button
          size="lg"
          variant="filled"
          ripple={true}
          className="text-white tex-center px-4 py-4 hover:bg-gray-300 hover:text-black duration-300 ease-in-out"
          onClick={() =>
            dispatch(
              addToCart({ ...product, size: defaultSize, color: defaultColor })
            )
          }
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductSectionItem;
