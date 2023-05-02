import React from "react";

const NotFoundByFilters = () => {
  return (
    <div className="grow w-full h-full py-20 px-8">
      <h1 className="w-full text-center font-bold text-4xl text-white flex items-center justify-center bg-black/60 p-4 rounded-3xl">
        Nothing was found for your query... Clear the filter and try again.
      </h1>
    </div>
  );
};

export default NotFoundByFilters;
