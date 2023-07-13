import React from "react";
import FavoritesLIst from "Modules/WishList/FavoritesList/FavoritesLIst";
import ButtonClear from "Modules/WishList/ButtonClear/ButtonClear";

const WishList = () => {
  return (
    <div className="relative grow bg-gray-900 p-4">
      <div className="w-full m-auto grid grid-cols-300 justify-center gap-4">
        <FavoritesLIst />
      </div>
      <ButtonClear />
    </div>
  );
};

export default WishList;
