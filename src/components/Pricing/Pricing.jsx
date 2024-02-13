import React, { useState } from "react";
import BikeData from "../BikeData/BikeData"; // Importing bike data from BikeData.js
import { Link } from "react-router-dom";

export default function Pricing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBikes, setFilteredBikes] = useState([]);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterBikes(query);
  };

  // Function to filter bikes based on the search query
  const filterBikes = (query) => {
    const filtered = BikeData.filter((bike) =>
      bike.bikeName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBikes(filtered);
  };

  const sortedBike = [...BikeData].sort((a, b) => a.cc - b.cc);

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex items-center justify-between mb-8'>
        <input
          type='text'
          name='text'
          className='border border-gray-300 py-2 px-4 rounded-md w-1/2'
          placeholder='Search for the bike...'
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      <h1 className='text-3xl font-bold mb-4'>Discover Our Exclusive Models</h1>

      <div className='grid grid-cols-3 gap-8'>
        {searchQuery !== ""
          ? filteredBikes.map((bike, index) => (
              <div
                key={index}
                className='border border-gray-300 p-4 rounded-md flex flex-col items-center'
              >
                {/* Bike Image */}
                <div className='w-32 h-32 mb-4 overflow-hidden'>
                  <img
                    src={bike.imageSrc}
                    alt={bike.bikeName}
                    className={
                      bike.bikeName === "Tmax" ||
                      bike.bikeName === "Nmax Yamaha" ||
                      bike.bikeName === "Harley-Davidson"
                        ? "w-full h-auto max-h-24"
                        : "w-full h-full object-cover"
                    }
                  />
                </div>
                {/* Bike Name */}
                <h2 className='text-xl font-bold text-center mb-2'>
                  {bike.bikeName}
                </h2>
                {/* Bike Price */}
                <p className='text-lg font-semibold'>
                  Price: ฿{bike.price}/Day
                </p>
                {/* Engine Displacement */}
                <p className='text-sm'>Engine Displacement: {bike.cc} cc</p>
                {/* Link to Bike Details */}
                <Link
                  to={{
                    pathname: "/bike-details",
                    search: `?imageSrc=${encodeURIComponent(
                      bike.imageSrc
                    )}&bikeName=${encodeURIComponent(
                      bike.bikeName
                    )}&description=${encodeURIComponent(bike.description)}`,
                  }}
                  className='text-blue-500 hover:underline mb-2'
                >
                  Details
                </Link>
                {/* Add to Booking Button */}
                <Link
                  to={{
                    pathname: "/booking",
                    search: `?imageSrc=${encodeURIComponent(
                      bike.imageSrc
                    )}&bikeName=${encodeURIComponent(
                      bike.bikeName
                    )}&description=${encodeURIComponent(bike.description)}`,
                  }}
                  className='text-blue-500 hover:underline mb-2 rounded-lg px-4 py-2  hover:bg-blue-100'
                >
                  <button>Add to booking</button>
                </Link>
              </div>
            ))
          : sortedBike.map((bike, index) => (
              <div
                key={index}
                className='border border-gray-300 p-4 rounded-md flex flex-col items-center'
              >
                {/* Bike Image */}
                <div className='w-32 h-32 mb-4 overflow-hidden'>
                  <img
                    src={bike.imageSrc}
                    alt={bike.bikeName}
                    className={
                      bike.bikeName === "Tmax" ||
                      bike.bikeName === "Nmax Yamaha" ||
                      bike.bikeName === "Harley-Davidson"
                        ? "w-full h-auto max-h-24"
                        : "w-full h-full object-cover"
                    }
                  />
                </div>
                {/* Bike Name */}
                <h2 className='text-xl font-bold text-center mb-2'>
                  {bike.bikeName}
                </h2>
                {/* Bike Price */}
                <p className='text-lg font-semibold'>
                  Price: ฿{bike.price}/Day
                </p>
                {/* Engine Displacement */}
                <p className='text-sm'>Engine Displacement: {bike.cc} cc</p>
                {/* Link to Bike Details */}
                <Link
                  to={{
                    pathname: "/bike-details",
                    search: `?imageSrc=${encodeURIComponent(
                      bike.imageSrc
                    )}&bikeName=${encodeURIComponent(
                      bike.bikeName
                    )}&description=${encodeURIComponent(bike.description)}`,
                  }}
                  className='text-blue-500 hover:underline mb-2'
                >
                  Details
                </Link>
                {/* Add to Booking Button */}
                <Link
                  to={{
                    pathname: "/booking",
                    search: `?imageSrc=${encodeURIComponent(
                      bike.imageSrc
                    )}&bikeName=${encodeURIComponent(
                      bike.bikeName
                    )}&description=${encodeURIComponent(bike.description)}`,
                  }}
                  className='text-blue-500 hover:underline mb-2 rounded-lg px-4 py-2  hover:bg-blue-100'
                >
                  <button>Add to booking</button>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}
