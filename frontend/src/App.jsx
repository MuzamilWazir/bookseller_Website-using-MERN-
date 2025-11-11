import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-5 font-primary ">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default App;
