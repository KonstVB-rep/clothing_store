import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filteredProductsType } from "../../feature/slices/productsSlice";
import { FilterGoods } from "../FilterGoods";
import FiltersValue from "../FiltersValue/FiltersValue";
import { clothingTypes } from "../../assets/data";
import { NotFoundPage } from "../404";

const GoodsList = React.lazy(() =>
  import("./GoodsList").then((module) => ({
    default: module.GoodsList,
  }))
);

const GoodsTypePage = () => {
  const { type } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (type) {
      dispatch(filteredProductsType(type));
    }
  }, [type, dispatch]);

  if (!clothingTypes.includes(type)) {
    return <NotFoundPage />;
  }

  return (
    <div className="pt-6 bg-gradient-to-r from-cyan-200 to-cyan-500 flex flex-col grow">
      <div className="px-4">
        <h1 className="text-white bg-black text-center py-4 rounded-3xl text-4xl font-inter font-bold tracking-normal leading-none">
          {type}
        </h1>
        <FilterGoods />
        <FiltersValue />
      </div>
      <GoodsList />
    </div>
  );
};
export default GoodsTypePage;
