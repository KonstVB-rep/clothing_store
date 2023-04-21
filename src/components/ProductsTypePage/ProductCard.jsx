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

const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  console.log(id, name, text, img, price, colors);

  return (
    <Link to={`/filter/${type}/${id}`}>
      <Card
        className="static w-full h-[600px] pt-2 bg-gray-400 text-black hover:bg-black hover:text-white duration-300"
        // onClick={() => dispatch(singleProduct(id))}
      >
        <CardHeader color="blue" className="relative mt-0 grow">
          <img
            src={img}
            alt="img-blur-shadow"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small" className="text-xl">
            {price}$
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="flex gap-1 px-2 py-1 rounded-2xl bg-white"
          >
            {["black", "red", "green"]?.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 "
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
