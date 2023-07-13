import React, { useEffect, useState } from "react";
import Select from "../Select/Select";
import { AddToCartButton } from "../../../components/Buttons/AddToCartButton";
import { useSelector } from "react-redux";
import { selectSingleProduct } from "../../../feature/slices/productsSlice";
import { FavoriteIcon } from "components/FavoriteIcon";

const Content = () => {
  const product = useSelector(selectSingleProduct);

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    setSize(product && product.size ? product.size[0] : "");
    setColor(product ? product?.color[0] : "");
  }, [product]);

  return (
    <>
      <FavoriteIcon currentProduct={{ ...product, size, color }} />
      <div className="w-full px-4 py-4 text-center bg-black/30 flex items-end">
        <div className="max-w-lg m-auto">
          <h5 className="text-2xl font-inter text-white font-bold tracking-normal leading-none pb-4">
            {product?.name}
          </h5>
          <p className="text-base font-inter text-white tracking-normal leading-6 pb-4">
            {product?.text}
          </p>
          <div className="pb-4">
            {product?.size && (
              <Select
                product={product}
                option={size}
                keyName="size"
                callback={setSize}
              />
            )}
          </div>
          <div className="pb-8">
            <Select
              product={product}
              option={color}
              keyName="color"
              callback={setColor}
            />
          </div>
          <AddToCartButton product={{ ...product, size, color }} />
        </div>
      </div>
    </>
  );
};

export default Content;
