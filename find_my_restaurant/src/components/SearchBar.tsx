import React, { ChangeEvent, FormEvent, useState } from "react";
import GpsNotFixedIcon from "@mui/icons-material/GpsNotFixed";
import { useNavigate } from "react-router-dom";
import IRestaurant from "../models/Restaurant";
import { merchant } from "../constants";
import { Alert,Snackbar } from "@mui/material";

const SearchBar: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    searchParams.set("address", address);

    const filteredRestaurants = merchant.filter(
      (m: IRestaurant) =>
        m.location.street.toLowerCase() === address.toLowerCase()
    );

    if (filteredRestaurants.length > 0) {
      navigate(`/restaurant?${searchParams.toString()}`);
    } else {
      setSnackbarOpen(true);
    }
  };

  const handleAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center w-full mt-6"
      >
        <div className="flex items-center justify-between bg-white space-x-2 py-4 px-8 md:py-6 md:px-16">
          <GpsNotFixedIcon sx={{ color: "#e74222" }} />
          <input
            type="text"
            placeholder="Enter Location eg. 240 Kent Ave"
            value={address}
            onChange={handleAddress}
            className="flex-1 text-left font-[360] text-lg outline-none"
          />
        </div>
        <div className="bg-brickRed w-1/5 py-4 px-8 md:py-6 md:px-16 cursor-pointer">
          <button
            type="submit"
            className="text-white font-semibold text-lg flex items-center justify-center h-full w-full"
          >
            Search
          </button>
        </div>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert severity="error" sx={{width:'100%'}}>Please enter a valid address to search restaurants
        
        </Alert>
      </Snackbar>
    </>
  );
};

export default SearchBar;
