import "./App.css";
import { Outlet } from "react-router-dom";
import React from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Footer } from "./components/Footer";
import { HeaderPage } from "./components/HeaderPage";

function App() {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <HeaderPage />
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
