import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { getSingleProduct } from "../../../feature/slices/productsSlice";

const ProductCard = ({ id, name, text, img, price, color }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link
      to={`/filter/${type}/${id}`}
      className="w-full "
      onClick={() => dispatch(getSingleProduct(id))}
    >
      <Card
        className="w-full h-[500px] bg-gray-400 text-white hover:bg-black relative overflow-hidden rounded-0"
        onClick={() => dispatch(getSingleProduct(id))}
      >
        <CardHeader color="blue" className="relative m-0 grow rounded-none">
          <img
            src={img}
            alt="img-blur-shadow"
            className="h-full w-full object-cover"
          />
          <CardBody className="absolute text-center pb-6 bg-black/50 inset-0 flex flex-col items-center justify-end hover:opacity-0 duration-300">
            <Typography variant="h5" className="mb-2">
              {name}
            </Typography>
            <Typography>{text}</Typography>
          </CardBody>
        </CardHeader>
        <CardFooter
          divider
          className="flex items-center justify-between pt-4 pb-4 bg-black/70"
        >
          <Typography variant="small" className="text-xl font-semibold">
            {price}$
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="flex gap-1 px-2 py-1 rounded-2xl bg-white"
          >
            {color?.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2"
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
