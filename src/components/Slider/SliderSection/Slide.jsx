import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentSlide } from "feature/slices/sliderSlice";

const Slide = ({ id, img, text }) => {
  const slideIndex = useSelector(selectCurrentSlide);

  return (
    <div
      key={id}
      className={
        parseInt(id) === slideIndex
          ? "opacity-100 duration-500 ease-in-out scale-100"
          : "opacity-0 duration-500 ease-in-out scale-90"
      }
    >
      <div>
        {parseInt(id) === slideIndex && (
          <img
            className="h-[400px] w-full object-cover mobile:h-[650px]"
            src={img}
            alt="shoes"
            rel="preload"
          ></img>
        )}
      </div>
      <div className="absolute top-0 mobile:top-24 mx-auto w-full bg-black/50 ">
        <p className="text-white text-4xl font-inter font-bold text-center tracking-normal leading-none w-[80%] m-auto py-2">
          {parseInt(id) === slideIndex && text}
        </p>
      </div>
    </div>
  );
};

export default Slide;
