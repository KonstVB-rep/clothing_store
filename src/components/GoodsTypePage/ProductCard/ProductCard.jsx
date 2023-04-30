import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const ProductCard = ({ id, name, text, img, price, color }) => {
  const { type } = useParams();

  return (
    <Card className="w-full h-[500px] bg-gray-400 text-white hover:bg-black relative overflow-hidden rounded-0">
      <CardHeader color="blue" className="relative m-0 grow rounded-none">
        <img
          src={img}
          alt="img-blur-shadow"
          className="h-full w-full object-cover"
        />
        <Link
          to={`/filter/${type}/${id}`}
          className="absolute inset-0 bg-black/30 hover:opacity-0 focus-visible:opacity-0 duration-200 rounded-t-2xl"
        >
          <CardBody className="absolute text-center pb-6 bg-black/50 inset-0 flex flex-col items-center justify-end ">
            <Typography variant="h5" className="mb-2">
              {name}
            </Typography>
            <Typography>{text}</Typography>
          </CardBody>
        </Link>
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
  );
};

export default ProductCard;
