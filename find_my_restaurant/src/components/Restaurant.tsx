import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import IRestaurant from '../models/Restaurant';
import { merchant } from '../constants';
import { RedCar } from '../images';
import { RestaurantCard } from './RestaurantCard';

const RestaurantPage = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [street, setStreet] = useState<string>("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const address = queryParams.get("address") || "";

  useEffect(() => {
    const filteredRestaurants = merchant.filter(
      (m: IRestaurant) => m.location.street.toLowerCase() === address.toLowerCase()
    );
    setRestaurants(filteredRestaurants);
    if (filteredRestaurants.length > 0) {
      setStreet(address);
    }
  }, [address]);
  return (
    <div className='bg-white h-screen'>
      <div className=' bg-yellowishBackground w-full h-12'>
        <div className=' flex items-center justify-center text-center w-full h-full space-x-2'>
          <img src={RedCar} alt="red-car logo" className='w-5 h-5 md:w-8 md:h-8'/>
          <p className='text-[10px] md:text-base'>Looks like ASAP delivery is currently unavailable. Schedule your delivery or <span className='underline cursor-pointer'>Switch to pickup</span></p>
        </div>
      </div>
      <div className=' max-w-7xl mx-auto px-4'>
        <p className='mt-6 text-xl md:text-2xl text-black text-opacity-75 font-medium'> {restaurants.length} Near {street},{restaurants.length>0 ? restaurants[0].location.zip : " "} </p>
        <p className='mt-6 text-lg md:text-xl text-black text-opacity-75 font-normal'>Available for Scheduled Orders</p>
        <p className='mt-1 text-gray-400 text-sm md:text-[16px]'>Schedule an order for when the restaurant is open</p>
        <RestaurantCard restaurants={restaurants}/>
      </div>
    </div>
  )
}

export default RestaurantPage