import React from "react";
import clothes from "assets/images/clothes.webp";
import { ButtonsNavigate } from "../Buttons/ButtonsNavigate";

const Navigate = () => {
  return (
    <div>
      <ButtonsNavigate />
      <div className="bg-yellow-900 p-2 w-[55%] mx-auto w-full">
        <h3 className="text-black-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center item-center py-4">
        <img
          className="h-auto max-h-[600px] w-[90%] rounded-md shadow-lg shadow-gray-600 object-fill aspect-square"
          src={clothes}
          alt="clothes"
        ></img>
      </div>
    </div>
  );
};

export default Navigate;
