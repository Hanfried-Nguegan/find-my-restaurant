import React from "react";
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';


export default function SearchBar (){
    return (
        <form action="onSubmit" className="flex items-center justify-center w-full mt-2">
            <div className="flex items-center justify-between bg-white space-x-2 py-4 px-8 md:py-6 md:px-16">
                <GpsNotFixedIcon sx={{color: "#FA6D7A"}} />
                <input type="text" placeholder="Enter an address to search" className="flex-1 text-left font-[360] text-lg outline-none" />
            </div>
            <div className="bg-pinkyhard w-1/5 py-4 px-8 md:py-6 md:px-16 cursor-pointer ">
                <p className="flex justify-center text-center text-white font-semibold text-lg">Search</p>
            </div>
        </form>
    )
}