import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleProduct,
  selectSingleProduct,
} from "../../feature/slices/productsSlice";
import { FavoriteIcon } from "../FavoriteIcon";
import { useParams } from "react-router-dom";
import { addToCart } from "../../feature/slices/cartSlice";
import { ButtonGlobal } from "../Buttons/ButtonGlobal";

const SingleProductCard = () => {
  const product = useSelector(selectSingleProduct);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [size, setSize] = useState(
    product && product.size ? product.size[0] : ""
  );
  const [color, setColor] = useState((product && product?.color[0]) || "");

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id, dispatch]);

  return (
    <article className="h-full bg-blue-100 grow ">
      <div className="py-8 px-2">
        <div className="mx-auto p-1 flex gap-6 flex-col pt-6 bg-black shadow-lg max-w-[1080px] shadow-black justify-center items-center sm:p-6 md:flex-row rounded-2xl m-auto">
          <div className="relative overflow-hidden aspect-[3/4] w-full min-w-280px min-h-[450px] shadow-[0_0_10px_2px_rgba(0,0,0)] rounded-xl max-w-max">
            <img
              className="absolute inset-0 block w-full h-full rounded-lg object-cover duration-300"
              src={product?.img}
              alt={product?.name}
            ></img>
            <FavoriteIcon currentProduct={{ ...product, size, color }} />
          </div>
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
                  <div>
                    <label
                      htmlFor="size"
                      className="block mb-2 text-start text-white text-sm font-medium dark:text-white"
                    >
                      Pick a size
                    </label>
                    <select
                      id="size"
                      name="size"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      className="bg-gray-50 border border-gray-300 font-semibold text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {product?.size.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                )}
              </div>
              <div className="pb-8">
                <label
                  htmlFor="color"
                  className="block mb-2 text-start text-white text-sm font-medium dark:text-white"
                >
                  Pick a color
                </label>
                <select
                  id="color"
                  name="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 font-semibold text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {product?.color.map((color, index) => {
                    return (
                      <option key={index} value={color}>
                        {color}
                      </option>
                    );
                  })}
                </select>
              </div>
              <ButtonGlobal
                title="add to cart"
                onClick={() => dispatch(addToCart({ ...product, size, color }))}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleProductCard;
