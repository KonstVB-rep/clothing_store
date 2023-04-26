import React from "react";
import { NavBar } from "../NavBar";
import { Slider } from "../Slider";
import { Navigate } from "../Navigate";
import { ProductSection } from "../ProductSection";

const Main = () => {
  return (
    <main>
      <NavBar />
      <Slider />
      <Navigate />
      <ProductSection />
    </main>
  );
};

export default Main;
