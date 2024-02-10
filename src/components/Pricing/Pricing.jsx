import Card from "../../components/Card";
// import Image1 from "../../assets/Tmax.png";
// import Image3 from "../../assets/PCX.png";
// import Image4 from "../../assets/Xmaxx.png";
// import Image5 from "../../assets/Tmaxx.png";
// import Image2 from "../../assets/Xadv-750.png";
import "./Pricing.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import BikeData from "../BikeData/BikeData";
import { FaSearch } from "react-icons/fa";

export default function Pricing() {
  const titleSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 600,
  });

  const cardContainerSpring = useSpring({
    from: { opacity: 0, transform: "translateX(160px)" },
    to: { opacity: 1, transform: "translateX(10)" },
    config: { duration: 500 },
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  //Function to handle search input change
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterCards(query);
  };

  //Funtion to filter cards based on the search query

  const filterCards = (query) => {
    const filtered = BikeData.filter((card) =>
      card.bikeName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCards(filtered);
  };
  return (
    <div className='pricing-container'>
      <div className='input-wrapper'>
        <FaSearch id='search-icon' />
        <input
          placeholder='Type to search...'
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <animated.h1 className='pricing-title' style={titleSpring}>
        Discover Our Exclusive Models
      </animated.h1>

      <animated.div className='card-container' style={cardContainerSpring}>
        {/* Render filtered cards if search query is present, else render all cards */}

        {searchQuery !== ""
          ? filteredCards.map((card, index) => (
              <Card
                key={index}
                imageSrc={card.imageSrc}
                bikeName={card.bikeName}
                description={card.description}
              />
            ))
          : BikeData.map((card, index) => (
              <Card
                key={index}
                imageSrc={card.imageSrc}
                bikeName={card.bikeName}
                description={card.description}
              />
            ))}
      </animated.div>
    </div>
  );
}
