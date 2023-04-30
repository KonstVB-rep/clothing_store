import React, { useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  filteredProductsType,
  filteredProductByProps,
} from "../../feature/slices/productsSlice";
import { FilterGoods } from "../FilterGoods";
import { NotFoundByFilters } from "../NotFoundByFilters";
import { Spinner } from "../Spinner";

const GoodsList = React.lazy(() =>
  import("./GoodsList").then((module) => ({
    default: module.GoodsList,
  }))
);

const GoodsTypePage = () => {
  const { type } = useParams();

  const products = useSelector(filteredProductByProps);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type) {
      dispatch(filteredProductsType(type));
    }
  }, [type, dispatch]);

  if (!products.length) {
    return <NotFoundByFilters />;
  }

  return (
    <div>
      <div className="pt-16 bg-gradient-to-r from-cyan-200 to-cyan-500">
        <div className="px-4">
          <h1 className="text-white bg-black text-center py-4 rounded-3xl text-4xl font-inter font-bold tracking-normal leading-none">
            {type}
          </h1>
          <FilterGoods />
        </div>
        <Suspense fallback={<Spinner />}>
          <GoodsList />
        </Suspense>
      </div>
    </div>
  );
};
export default GoodsTypePage;
