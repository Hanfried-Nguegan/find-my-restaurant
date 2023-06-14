import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Hero, Restaurant } from "./components";
import { merchant } from "./constants";

const App = () => {

  return (
    <Router>
      <div className="bg-pinkychoco w-full h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero/>}/>     
          <Route path="/restaurant" element={ <Restaurant restaurants={merchant}/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
