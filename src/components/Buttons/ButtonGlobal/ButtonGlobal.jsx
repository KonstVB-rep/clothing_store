import React from "react";
import { Button } from "@material-tailwind/react";

const btnClass =
  "text-white tex-center px-4 py-4 hover:bg-gray-300 hover:text-black focus-visible::bg-gray-300 focus-visible::text-black duration-300 ease-in-out active:bg-transparent active:text-white";

const ButtonGlobal = ({ title, color = "", ...rest }) => {
  return (
    <Button
      size="lg"
      variant="filled"
      ripple={true}
      className={`${btnClass} ${color}`}
      {...rest}
    >
      {title}
    </Button>
  );
};

export default ButtonGlobal;
