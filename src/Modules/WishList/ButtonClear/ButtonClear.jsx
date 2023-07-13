import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFavoritesList,
  selectFavorites,
} from "feature/slices/productsSlice";

const ButtonClear = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const clearList = () => {
    dispatch(clearFavoritesList());
  };

  if (!favorites.length) {
    return null;
  }

  return (
    <button
      onClick={clearList}
      className="h-10 w-24 block mx-auto mt-4 font-semibold rounded-3xl bg-orange-900 text-white text-center hover:bg-red-700 focus-visible:bg-red-700 active:scale-90 duration-200"
    >
      Clear list
    </button>
  );
};

export default ButtonClear;
