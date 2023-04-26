import React from "react";
import { buttons } from "../../assets/data";
import { Link } from "react-router-dom";
import { filteredProducts } from "../../feature/slices/productsSlice";
import { useDispatch } from "react-redux";

const ButtonsNavigate = ({ classWrap, home = false }) => {
  const dispatch = useDispatch();
  return (
    <div className={classWrap}>
      {home && (
        <Link
          to="/"
          className="flex justify-center items-center rounded-md text-white bg-blue-800 w-24 px-0 py-4 hover:scale-110 focus-visible:scale-110 duration-300"
        >
          Home
        </Link>
      )}
      {buttons.map((button, index) => {
        return (
          <Link
            to={`/filter/${button}`}
            key={index}
            className="flex justify-center items-center text-white bg-blue-300 w-24 px-0 py-4 hover:bg-white hover:text-black hover:opacity-1 duration-300 ease-in-out rounded-md"
            onClick={() => dispatch(filteredProducts(button))}
          >
            {button}
          </Link>
        );
      })}
    </div>
  );
};

export default ButtonsNavigate;
