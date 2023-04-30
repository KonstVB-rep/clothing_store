import React, { useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  filteredProductsType,
  filteredProductByProps,
} from "../../feature/slices/productsSlice";
import { FilterGoods } from "../FilterGoods";
import { Spinner } from "../Spinner";
import FiltersValue from "../FiltersValue/FiltersValue";

const GoodsList = React.lazy(() =>
  import("./GoodsList").then((module) => ({
    default: module.GoodsList,
  }))
);

const NotFoundByFilters = React.lazy(() =>
  import("../NotFoundByFilters").then((module) => ({
    default: module.NotFoundByFilters,
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

  return (
    <div className="pt-6 bg-gradient-to-r from-cyan-200 to-cyan-500 flex flex-col grow">
      <div className="px-4">
        <h1 className="text-white bg-black text-center py-4 rounded-3xl text-4xl font-inter font-bold tracking-normal leading-none">
          {type}
        </h1>
        <FilterGoods />
        <FiltersValue />
      </div>
      <Suspense fallback={<Spinner />}>
        {!products.length ? <NotFoundByFilters /> : <GoodsList />}
      </Suspense>
    </div>
  );
};
export default GoodsTypePage;
