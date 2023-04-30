import React from "react";
import { storeData } from "../../assets/data";
import { ProductMainCard } from "./ProductMainCard";

const GoodsMainSection = () => {
  return (
    <div>
      <div className="bg-black p-2 w-full mx-auto bg-yellow-900">
        <h2 className="text-black-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SUMMER T-Shirt SALE 30%
        </h2>
      </div>
      <div className="grid grid-cols-fit justify-items-center py-8 px-4 gap-x-3 gap-6">
        {storeData.slice(0, 6).map((product, index) => (
          <ProductMainCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default GoodsMainSection;
