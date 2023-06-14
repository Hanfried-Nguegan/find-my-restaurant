import React from "react"

export const RestaurantCard = ({restaurants}:any) => {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
      {restaurants.map((restaurant:any) => (
        <div key={restaurant.id} className="flex flex-col items-center">
            <div className="relative min-w-[400px] min-h-[250px] ">
                <img src={restaurant.logo_url} alt="restaurant banner" className="w-full h-auto rounded-lg" />
            </div>
            <div>Div Containing Data</div>
        </div>
      ))}
    </div>
  );

}