import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortByPrice } from "feature/slices/productsSlice";
import { ButtonGlobal } from "components/Buttons/ButtonGlobal";

const SortDirection = () => {
  const [sortPrice, setSortPrice] = useState("asc");
  const dispatch = useDispatch();

  const toggleSort = () => {
    let sortDirection = sortPrice === "asc" ? "desc" : "asc";
    setSortPrice(sortDirection);
    dispatch(sortByPrice(sortPrice));
  };

  return (
    <ButtonGlobal
      title={sortPrice === "asc" ? "Price ▼" : "Price ▲"}
      onClick={toggleSort}
    />
  );
};
export default SortDirection;
