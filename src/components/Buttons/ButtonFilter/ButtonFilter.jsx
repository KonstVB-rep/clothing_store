import React, { memo } from "react";
import { Button } from "@material-tailwind/react";

const btnStyle =
  "relative text-white w-full hover:bg-gray-300 hover:text-black duration-300 ease-in-out px-0 py-2 text-center mobile:max-w-[100px] active:bg-gray-900 active:text-white";

const ButtonFilter = ({ title, color = "", ...rest }) => {
  return (
    <Button
      size="lg"
      variant="filled"
      ripple={true}
      className={`${btnStyle} ${color}`}
      {...rest}
    >
      {title}
    </Button>
  );
};

export default memo(ButtonFilter);
