import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Hero, Restaurant } from "./components";

const App = () => {
  

  return (
    <Router>
      <div className=" bg-blue-950 w-full h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}/>     
          <Route path="/restaurant" element={ <Restaurant />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
