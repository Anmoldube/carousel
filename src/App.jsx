import React from "react";
import Carousel from "./Carousel";
import Features from "./Features";

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Carousel />
      </div>
      <Features />
    </>
  );
}

export default App;
