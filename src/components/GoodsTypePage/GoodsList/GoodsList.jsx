import React, { Suspense } from "react";
import { ProductCard } from "../ProductCard";
import { useSelector } from "react-redux";
import { filteredProductByProps } from "../../../feature/slices/productsSlice";
import { Spinner } from "../../Spinner";

const NotFoundByFilters = React.lazy(() =>
  import("../../NotFoundByFilters").then((module) => ({
    default: module.NotFoundByFilters,
  }))
);

const GoodsList = () => {
  const products = useSelector(filteredProductByProps);

  return (
    <Suspense fallback={<Spinner />}>
      {!products.length ? (
        <NotFoundByFilters />
      ) : (
        <>
          <div className="grid grid-cols-fit justify-items-start p-4 pt-0 gap-6 justify-center">
            {products.map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })}
          </div>
        </>
      )}
    </Suspense>
  );
};

export default GoodsList;
