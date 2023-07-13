import React from "react";
import { FavoriteCard } from "../FavoriteCard";
import { useSelector } from "react-redux";
import { selectFavorites } from "feature/slices/productsSlice";

const FavoritesLIst = () => {
  const favoritesList = useSelector(selectFavorites);

  return (
    <>
      {favoritesList.length === 0 ? (
        <h1 className="font-semibold text-white uppercase w-full py-2 text-4xl text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          The favorites list is empty
        </h1>
      ) : (
        favoritesList.map((product, index) => {
          return <FavoriteCard key={product.name + index} product={product} />;
        })
      )}
    </>
  );
};

export default FavoritesLIst;
