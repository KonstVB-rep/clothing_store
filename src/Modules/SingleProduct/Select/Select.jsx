import React from "react";

const Select = ({ product, option, keyName, callback }) => {
  return (
    <div>
      <label
        htmlFor="size"
        className="block mb-2 text-start text-white text-sm font-medium dark:text-white"
      >
        Pick a size
      </label>
      <select
        id="size"
        name="size"
        value={option}
        onChange={(e) => callback(e.target.value)}
        className="bg-gray-50 border border-gray-300 font-semibold text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {product?.[keyName].map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
