import React, { ChangeEvent, FormEvent, useState } from "react";
import GpsNotFixedIcon from "@mui/icons-material/GpsNotFixed";

interface ISearchBarProps {
  searchRestaurants: (address: string) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({ searchRestaurants }) => {
  const [address, setAddress] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRestaurants(address);
  };

  const handleAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center w-full mt-2"
    >
      <div className="flex items-center justify-between bg-white space-x-2 py-4 px-8 md:py-6 md:px-16">
        <GpsNotFixedIcon sx={{ color: "#FA6D7A" }} />
        <input
          type="text"
          placeholder="Enter an address to search"
          value={address}
          onChange={handleAddress}
          className="flex-1 text-left font-[360] text-lg outline-none"
        />
      </div>
      <div className="bg-pinkyhard w-1/5 py-4 px-8 md:py-6 md:px-16 cursor-pointer ">
        <button type="submit" className="text-white font-semibold text-lg flex items-center justify-center h-full w-full">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
