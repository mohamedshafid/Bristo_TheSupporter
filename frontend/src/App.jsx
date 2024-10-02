import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Sidebar, Hero } from "./components";

const App = () => {
  return (
    <div className="dark:bg-black dark:text-white text-black w-full min-h-screen flex flex-row relative  px-2 py-4">
      <Sidebar />
      <Hero />
    </div>
  );
};

export default App;
