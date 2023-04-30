import React from "react";

const NotFoundByFilters = () => {
  return (
    <div className="grow w-full h-full bg-gray-900 pt-10">
      <h1 className="w-full text-center font-bold text-4xl text-white flex items-center justify-center">
        Sorry no products match your filter search ... Clear the filter and try
        again.
      </h1>
    </div>
  );
};

export default NotFoundByFilters;
