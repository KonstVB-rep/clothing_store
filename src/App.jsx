import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import ButtonsNavigate from "./components/ButtonsNavigate/ButtonsNavigate";
import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useDispatch } from "react-redux";
import { getSingleProduct } from "./feature/slices/productsSlice";

function App() {
  let { pathname } = useLocation();

  return (
    <div className="min-h-[100vh] flex flex-col">
      {pathname !== "/" && (
        <ButtonsNavigate
          home={true}
          classWrap="flex flex-row px-4 py-8 gap-4 flex-wrap justify-center bg-black"
        />
      )}
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
    </div>
  );
}

export default App;
