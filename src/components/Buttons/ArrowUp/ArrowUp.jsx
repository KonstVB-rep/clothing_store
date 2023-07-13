import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ArrowUp = () => {
  const [visible, setVisible] = useState(false);

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  const getScrollPosition = () => {
    const position = document.documentElement.scrollTop;
    if (position > 1000) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollPosition);
    return () => window.removeEventListener("scroll", getScrollPosition);
  });

  return (
    <>
      {visible && (
        <>
          {createPortal(
            <button
              onClick={scrollUp}
              className="group fixed right-[5%] bottom-[20%] h-12 w-12 p-2 bg-orange-900 flex items-center justify-center z-10 rounded-full hover:scale-110 hover:bg-gray-900 focus-visible:scale-110 focus-visible:bg-gray-900 active:scale-90 duration-200"
            >
              <BsFillArrowUpCircleFill className="h-full w-full group-hover:text-white group-focus-visible:text-white" />
            </button>,
            document.getElementById("root"),
            "ArrowUp"
          )}
        </>
      )}
    </>
  );
};

export default ArrowUp;
