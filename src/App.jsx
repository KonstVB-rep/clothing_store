import "./App.css";
import { Outlet } from "react-router-dom";
import React from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Header />
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
