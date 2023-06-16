import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {

  return (
    <section className="h-[80vh] grid place-items-center justify-center">
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-white bg-brickRed px-2 -rotate-3 text-[50px] md:text-[62px] font-bold pacifico ">
          Find My Restaurant
        </h1>
        <h2 className="text-white text-2xl md:text-3xl font-semibold mt-2">
          See who delivers in your neighborhood
        </h2>
        <div>
          {/* SearchBar Component */}
          <SearchBar />
        </div>
        <div className="mt-1">
          <p className="text-xs md:text-base text-white text-opacity-80 tracking-wide">
            Pizza delivery, Sushi, Chinese food, Indian food, Italian food,
            mexican food
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
