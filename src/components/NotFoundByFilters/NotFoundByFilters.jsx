import React from "react";

const NotFoundByFilters = () => {
  return (
    <div className="grow relative">
      <h1 className=" absolute inset-0 w-full text-center font-bold text-4xl bg-gray-900 text-white flex items-center justify-center">
        Sorry no products match your filter search ... Clear the filter and try
        again.
      </h1>
    </div>
  );
};

export default NotFoundByFilters;
