import React from "react";
import { Button } from "@material-tailwind/react";

const btnClass =
  "text-white w-full p-2 tex-center bg-blue-700 hover:bg-gray-300 hover:text-black focus-visible:bg-gray-300 focus-visible:text-black duration-200 ease-in-out active:bg-black active:text-white mobile:max-w-[120px]";

const actions = {
  onMouseDown: (e) => {
    e.target.textContent = "product added";
    e.target.style.outline = "4px solid green";
  },
  onMouseUp: (e) => {
    e.target.textContent = "add to cart";
    e.target.style.outline = "4px solid transparent";
  },
  onKeyDown: (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.target.textContent = "product added";
      e.target.style.outline = "4px solid green";
    }
  },
  onKeyUp: (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.target.textContent = "add to cart";
      e.target.style.outline = "4px solid transparent";
    }
  },
};

const ButtonGlobal = ({ title, color = "", ...rest }) => {
  const styleAddBtn =
    title === "add to cart"
      ? "mobile:max-w-[200px] min-w-38 py-4 px-6 rounded-3xl"
      : "";

  const mouseActions = title === "add to cart" ? actions : {};

  return (
    <Button
      size="lg"
      variant="filled"
      ripple={true}
      className={`${btnClass} ${color} ${styleAddBtn}`}
      {...rest}
      {...mouseActions}
    >
      {title}
    </Button>
  );
};

export default ButtonGlobal;
