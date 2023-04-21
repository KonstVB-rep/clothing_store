import React from "react";
import { buttons } from "../../assets/data";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { useDispatch } from "react-redux";
import { filteredProducts } from "../../feature/slices/productsSlice";

const Navigate = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center justify-center py-8 bg-black gap-4 flex-wrap">
        {buttons.map((button, index) => {
          return (
            <div key={index}>
              <Link to={`/filter/${button}`}>
                <Button
                  size="lg"
                  variant="filled"
                  ripple={true}
                  className="text-white w-24 tex-center px-0 py-4 hover:bg-gray-300 hover:text-black duration-300 ease-in-out"
                  onClick={() => dispatch(filteredProducts(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-yellow-900 p-2 w-[55%] mx-auto w-full">
        <h3 className="text-black-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center item-center py-4">
        <img
          className="h-auto max-h-[600px] w-[80%] rounded-md shadow-lg shadow-gray-600 object-cover aspect-square object-top"
          src={clothes}
          alt="clothes"
        ></img>
      </div>
    </div>
  );
};

export default Navigate;
