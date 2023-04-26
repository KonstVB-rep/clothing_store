import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavorites,
  toggleFavorite,
} from "../../feature/slices/productsSlice";

const FavoriteIcon = ({ tag = "button", currentProduct = {} }) => {
  const wishList = useSelector(selectFavorites);

  console.log(currentProduct);

  const isExist = wishList.some((prod) => {
    return (
      prod.id === currentProduct.id &&
      prod.size === currentProduct.size &&
      prod.color === currentProduct.color
    );
  });

  console.log(isExist);
  const color = isExist ? "red" : "black";

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleFavorite(currentProduct));
  };

  const iconHeart = (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      className="w-[35px] h-[35px]"
    >
      <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
    </svg>
  );

  return (
    <>
      {tag === "link" ? (
        <Link
          className="flex items-center justify-center h-full w-full p-2 max-w-[45px] max-h-[45px]"
          to="/wish_list"
        >
          {iconHeart}
        </Link>
      ) : (
        <div className="absolute top-2 right-2 w-[40px] h-[40px] bg-white rounded-[50%]">
          <button
            className="flex items-center justify-center h-full w-full p-2 max-w-[45px] max-h-[45px]"
            onClick={handleClick}
          >
            {iconHeart}
          </button>
        </div>
      )}
    </>
  );
};

export default FavoriteIcon;
