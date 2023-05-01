import React from "react";
import { buttons } from "../../../assets/data";
import { Link, useNavigate } from "react-router-dom";
import { clearFilter } from "../../../feature/slices/productsSlice";
import { useDispatch } from "react-redux";

const ButtonsNavigate = ({ back = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goBack = () => navigate(-1);

  return (
    <div className="flex items-center px-4 py-8 gap-4 flex-wrap justify-center bg-black">
      <div className="grid grid-cols-nav gap-4 max-w-[1080px] w-full px-2">
        {back && (
          <button
            onClick={goBack}
            className="flex justify-center items-center rounded-md text-black bg-gray-300 px-0 py-4 h-10 hover:scale-110 focus-visible:scale-110 duration-300 capitalize active:bg-transparent active:text-white"
          >
            back
          </button>
        )}
        {buttons.map((button, index) => {
          return (
            <Link
              to={`/filter/${button}`}
              key={index}
              onClick={() => dispatch(clearFilter())}
              className=" w-full bg-blue-700 flex justify-center items-center text-white w-24 px-0 py-4 hover:bg-white hover:text-black hover:opacity-1 duration-300 ease-in-out rounded-md h-10 active:border-2 active:border-cyan-50 active:bg-black active:text-white"
            >
              {button}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonsNavigate;
