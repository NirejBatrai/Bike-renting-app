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
      <div className='input-container'>
        <input
          type='text'
          name='text'
          className='input'
          placeholder='Search for the bike......'
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <span className='icon'>
          <svg
            width='19px'
            height='19px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              <path
                opacity='1'
                d='M14 5H20'
                stroke='#000'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                opacity='1'
                d='M14 8H17'
                stroke='#000'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                d='M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2'
                stroke='#000'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                opacity='1'
                d='M22 22L20 20'
                stroke='#000'
                strokeWidth='3.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </g>
          </svg>
        </span>
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
