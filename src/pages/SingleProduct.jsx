import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleProduct,
  selectSingleProduct,
} from "feature/slices/productsSlice";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { Content } from "Modules/SingleProduct/Content";

const SingleProduct = () => {
  const product = useSelector(selectSingleProduct);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id, dispatch]);

  if (!product) {
    return <NotFound />;
  }

  return (
    <article className="h-full bg-blue-100 grow ">
      <div className="py-8 px-2">
        <div className="relative mx-auto p-1 flex gap-6 flex-col pt-6 bg-black shadow-lg max-w-[1080px] shadow-black justify-center items-center sm:p-6 md:flex-row rounded-2xl m-auto">
          <div className="relative overflow-hidden aspect-[3/4] w-full min-w-280px min-h-[450px] shadow-[0_0_10px_2px_rgba(0,0,0)] rounded-xl max-w-max">
            <img
              className="absolute inset-0 block w-full h-full rounded-lg object-cover duration-300"
              src={product?.img}
              alt={product?.name}
            ></img>
          </div>
          <Content />
        </div>
      </div>
    </article>
  );
};

export default SingleProduct;
