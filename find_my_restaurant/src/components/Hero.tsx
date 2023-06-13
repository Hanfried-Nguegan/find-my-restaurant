import React from "react";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-white text-5xl md:text-6xl font-bold pacifico ">
          Find My Restaurant
        </h1>
        <h2 className="text-white text-2xl md:text-3xl font-semibold mt-4">
          See who delivers in your neighborhood
        </h2>
        <div>
          {/* SearchBar Component */}
          <SearchBar />
        </div>
        <div className="mt-1">
          <p className="text-sm md:text-base text-white text-opacity-80">
            Pizza delivery, Sushi, Chinese food, Indian food, Italian food,
            mexican food
          </p>
        </div>
      </div>
    </section>
  );
}
