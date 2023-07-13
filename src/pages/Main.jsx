import React from "react";
import { NavBar } from "components/NavBar";
import { Slider } from "components/Slider";
import { GoodsMainSection } from "Modules/Main/GoodsMainSection";

const Main = () => {
  return (
    <main className="grow flex flex-col">
      <NavBar />
      <Slider />
      <GoodsMainSection />
    </main>
  );
};

export default Main;
