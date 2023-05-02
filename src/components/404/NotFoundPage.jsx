import React from "react";
import bgImg from "../../assets/images/404_limbo.webp";

const NotFoundPage = () => {
  return (
    <div className="grow relative">
      <img
        src={bgImg}
        alt="not found page"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    </div>
  );
};

export default NotFoundPage;
