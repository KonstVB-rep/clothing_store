import React from "react";
import { ProductCard } from "../ProductCard";
import { useSelector } from "react-redux";
import { filteredProductByProps } from "../../../feature/slices/productsSlice";

const GoodsList = () => {
  const products = useSelector(filteredProductByProps);

  return (
    <div className="grid grid-cols-fit justify-items-start p-4 pt-0 gap-6 justify-center">
      {products.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};

export default GoodsList;
