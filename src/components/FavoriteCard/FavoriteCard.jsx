import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { FavoriteIcon } from "../FavoriteIcon";
import { useDispatch } from "react-redux";
import { getSingleProduct } from "../../feature/slices/productsSlice";
import { Link } from "react-router-dom";

const FavoriteCard = ({ product }) => {
  const { id, name, img, price, color, size, type } = product;
  const dispatch = useDispatch();

  return (
    <Card className="w-full max-w-[16rem] shadow-lg max-h-[500px]">
      <CardHeader floated={false} color="blue-gray" className="h-[300px]">
        <img src={img} alt={name} className="h-full w-full object-cover" />

        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 ">
          <Link
            to={`/filter/${type}/${id}`}
            className="w-full h-full block"
            onClick={() => dispatch(getSingleProduct(id))}
          />
        </div>
        <FavoriteIcon currentProduct={{ ...product, size, color }} />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-medium font-semibold text-center w-full"
          >
            {name}
          </Typography>
        </div>
        <div className="flex items-center justify-between p-2 bg-gray-900 text-white font-semibold rounded-md">
          {size && <Typography>size: {size}</Typography>}
          <Typography>{price}$</Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true}>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FavoriteCard;
