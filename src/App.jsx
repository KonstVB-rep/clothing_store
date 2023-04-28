import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import ButtonsNavigate from "./components/ButtonsNavigate/ButtonsNavigate";
import React from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Footer } from "./components/Footer";
import { WishCartLine } from "./components/WIshCartLine";

function App() {
  let { pathname } = useLocation();

  return (
    <div className="min-h-[100vh] flex flex-col">
      {pathname !== "/" && (
        <div>
          <WishCartLine />
          <ButtonsNavigate
            back={true}
            classWrap="flex flex-row px-4 py-8 gap-4 flex-wrap justify-center bg-black"
          />
        </div>
      )}
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
