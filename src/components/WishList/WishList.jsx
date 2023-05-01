import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../feature/slices/productsSlice";
import { FavoriteCard } from "../FavoriteCard";
import { v4 as uuidv4 } from "uuid";

const WishList = () => {
  const favoritesList = useSelector(selectFavorites);

  return (
    <div className="relative grow bg-gray-900 p-4">
      <div className="w-full m-auto grid grid-cols-300 justify-center gap-4">
        {favoritesList.length === 0 ? (
          <h1 className="font-semibold text-white uppercase w-full py-2 text-4xl text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            The favorites list is empty
          </h1>
        ) : (
          favoritesList.map((product) => {
            return <FavoriteCard key={uuidv4()} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default WishList;
