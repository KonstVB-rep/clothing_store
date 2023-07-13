import React from "react";
import { selectFilters } from "feature/slices/productsSlice";
import { useSelector } from "react-redux";

const FiltersValue = () => {
  const currentFilter = useSelector(selectFilters);

  return (
    <div className="w-fit flex gap-2 pb-4 h-12 items-center">
      {Object.entries(currentFilter).map((item) => (
        <span
          key={item[0]}
          className="text-white font-sans font-bold uppercase uppercase p-2 bg-gray-900 rounded-md text-sm"
        >
          {item[0]}: {item[1]}
        </span>
      ))}
    </div>
  );
};

export default FiltersValue;
