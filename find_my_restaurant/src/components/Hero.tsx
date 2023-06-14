import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { merchant } from "../constants";
import { RestaurantCard } from "./RestaurantCard";
import { useNavigate } from "react-router-dom";
import IRestaurant from "../models/Restaurant";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  const searchRestaurants = (address: string) => {
    const filteredRestaurants = merchant.filter(
      (m: IRestaurant) => m.location.street === address
    );
    setRestaurants(filteredRestaurants);
    navigate("/restaurant");
  };

  return (
    <section className="h-[80vh] grid place-items-center">
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-white text-5xl md:text-6xl font-bold pacifico ">
          Find My Restaurant
        </h1>
        <h2 className="text-white text-2xl md:text-3xl font-semibold mt-4">
          See who delivers in your neighborhood
        </h2>
        <div>
          {/* SearchBar Component */}
          <SearchBar searchRestaurants={searchRestaurants} />
        </div>
        {restaurants.length > 0 && <RestaurantCard restaurants={restaurants} />}

        <div className="mt-1">
          <p className="text-sm md:text-base text-white text-opacity-80">
            Pizza delivery, Sushi, Chinese food, Indian food, Italian food,
            mexican food
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;