import React from 'react'
import { RedCar } from '../images'
import IRestaurant from '../models/Restaurant'
import { RestaurantCard } from './RestaurantCard'

interface RestaurantPageProps {
  restaurants : IRestaurant[]
}

const RestaurantPage = ({restaurants}:RestaurantPageProps) => {
  return (
    <div className='bg-white h-screen'>
      <div className=' bg-yellowishBackground w-full h-12'>
        <div className=' flex items-center justify-center text-center w-full h-full space-x-2'>
          <img src={RedCar} alt="red-car logo" className='w-6 h-6 md:w-8 md:h-8'/>
          <p className='text-[11px] md:text-base'>Looks like ASAP delivery is currently unavailable. Schedule your delivery or <span className='underline cursor-pointer'>Switch to pickup</span></p>
        </div>
      </div>
      <div className=' max-w-7xl mx-auto px-4'>
        <p className='mt-6 text-xl text-black text-opacity-75 font-medium'>9 Restaurants Near 232 Willow Ave, 07030 </p>
        <p className='mt-6 text-lg text-black text-opacity-75 font-normal'>Available for Scheduled Orders</p>
        <p className='mt-1 text-gray-400 text-sm'>Schedule an order for when the restaurant is open</p>

        <RestaurantCard restaurants={restaurants}/>
      </div>

    </div>
  )
}

export default RestaurantPage