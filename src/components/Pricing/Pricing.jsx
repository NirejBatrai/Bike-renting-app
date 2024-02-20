import { useEffect, useState } from "react";
import BikeData from "../BikeData/BikeData"; // Importing bike data from BikeData.js
import "./Pricing.css";
import Card from "../Card/Card"

export default function Pricing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBikes, setFilteredBikes] = useState([]);

  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    setBikes(BikeData);
  }, []);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterBikes(query);
  };

  // Function to filter bikes based on the search query
  const filterBikes = (query) => {
    try {
      const filtered = bikes.filter((bike) =>
        bike.bikeName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBikes(filtered);
    } catch (ex) {
      console.log(ex);
    }
  };

  const sortedBike = [...bikes].sort((a, b) => a.cc - b.cc);

  return (
    <div className="container mx-auto px-4 py-8 pricing-container">
      <div className="flex items-center justify-center mt-6 mb-8">
        <input
          type="text"
          name="text"
          className="border border-gray-600 py-1 px-4 rounded-md w-1/1 searchbar"
          placeholder="Search for the bike..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      <h1 className="text-3xl font-bold mb-4">Discover Our Exclusive Models</h1>

      <div className="card-container">
        {searchQuery !== ""
          ? filteredBikes.map((bike, index) => (
              <Card bike={bike} key={index}/>
            ))
          : sortedBike.map((bike, index) => (
              <Card bike={bike} key={index}/>
            ))}
      </div>
    </div>
  );
}
