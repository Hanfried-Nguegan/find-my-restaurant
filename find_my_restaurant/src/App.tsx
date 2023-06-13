import React from "react";
import { Navbar, Hero } from "./components";

function App() {
  return (
    <>
      <div className="bg-pinkychoco w-full h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />
      </div>
    </>
  );
}

export default App;
