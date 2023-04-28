import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../feature/slices/productsSlice";
import FavoriteCard from "../FavoriteCard/FavoriteCard";

const WishList = () => {
  const favoritesList = useSelector(selectFavorites);

  return (
    <div className="relative grow bg-gray-900 p-4">
      <div className="w-full max-w-[1080px] m-auto grid grid-cols-240 justify-center gap-4">
        {favoritesList.length === 0 ? (
          <h1 className="font-semibold text-white uppercase w-full py-2 text-4xl text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            The favorites list is empty
          </h1>
        ) : (
          favoritesList.map((product, index) => {
            return <FavoriteCard key={index} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default WishList;
