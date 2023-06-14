import React from "react";

export const RestaurantCard = ({ restaurants }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 cursor-pointer">
      {restaurants.map((restaurant: any) => (
        <div key={restaurant.id} className="flex flex-col items-center">
          <div className="relative [300px] min-h-auto lg:w-[400px]  ">
            <img
              src={restaurant.banner_url}
              alt="restaurant banner"
              className="w-full h-auto rounded-lg filter brightness-[0.7] hover:brightness-100"
            />
            <div className="flex space-x-2 absolute bottom-0 left-0 m-2 w-full">
              <div className=" w-24 h-24">
                <img
                  src={restaurant.logo_url}
                  alt="restaurant logo"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-white text-xl font-bold">
                  {restaurant.name}
                </p>
                <div className="flex items-center space-x-2">
                  {restaurant.cuisines.map((cuisine: string, index: number) => (
                    <p className="text-white tracking-wide">{cuisine}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-2 w-full">
            <div className="flex justify-start space-x-1">
              <p className="">⭐⭐⭐⭐</p>
              <p className="text-gray-500">
                ({restaurant.ratings.overall_rating})
              </p>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div className="flex flex-col items-start">
                <div className="font-semibold text-lg">{restaurant.location.distance} mi</div>
                <p className="text-gray-500 text-[16px]">Away</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-semibold text-lg">${restaurant.average_price}</div>
                <p className="text-gray-500 text-[16px]">Minimum</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-semibold text-lg">${restaurant.delivery_fee}</div>
                <p className="text-gray-500 text-[16px]">Delivery Fee</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
