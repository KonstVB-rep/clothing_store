import React from "react";
import clothes from "../../assets/images/clothes.jpg";
import ButtonsNavigate from "../ButtonsNavigate/ButtonsNavigate";

const Navigate = () => {
  return (
    <div>
      <ButtonsNavigate classWrap="flex items-center justify-center py-8 bg-black gap-4 flex-wrap" />
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
