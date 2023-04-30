import React from "react";
import { NavBar } from "../NavBar";
import { Slider } from "../Slider";
import { Navigate } from "../Navigate";
import { GoodsMainSection } from "../GoodsMainSection";

const Main = () => {
  return (
    <main>
      <NavBar />
      <Slider />
      <Navigate />
      <GoodsMainSection />
    </main>
  );
};

export default Main;
