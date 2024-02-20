import React from "react";
import Tmax from "../../assets/Tmax.png";
import XADV from "../../assets/XADV.png";
import KTM450 from "../../assets/KTM-450-DirtBike.png";
import Kawasaki_dirtbike from "../../assets/Dirt-Bike-Kawasaki.png";

import PCX from "../../assets/PCX.png";
import { Link } from "react-router-dom";

const bikeList = [
  {
    name: "Kawasaki DirtBike",
    price: 1000,
    image: Kawasaki_dirtbike,
    aosDelay: "0",
  },
  {
    name: "Xadv",
    price: 1400,
    image2: XADV,
    aosDelay: "500",
  },
  {
    name: "Dirt Bike",
    price: 800,
    image3: KTM450,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className='pb-24'>
      <div className='container'>
        {/* Heading */}
        <h1
          data-aos='fade-up'
          className='text-3xl sm:text-4xl font-semibold font-serif mb-3'
        >
          Auto Motor Bikes
        </h1>
        <p data-aos='fade-up' aos-delay='400' className='text-sm pb-10'>
          The PCX, XADV, and Tmax are innovative auto motorbikes designed for
          diverse riding needs. The PCX, known for its urban efficiency, offers
          practicality and style, ideal for city commuting. The XADV blends
          scooter convenience with adventure motorcycle capabilities, promising
          versatility on various terrains. Yamaha's Tmax stands out with its
          sporty performance and touring capabilities, making it a preferred
          choice for long-distance riders seeking both agility and comfort.
        </p>
        {/* Car listing */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
            {bikeList.map((data, index) => (
              <div
                key={index}
                data-aos='fade-up'
                data-aos-delay={data.aosDelay}
                className='space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group'
              >
                <div className='w-full h-[120px]'>
                  <img
                    src={data.image3 || data.image2 || data.image}
                    alt=''
                    className='w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700'
                  />
                </div>
                <div className='space-y-2'>
                  <h1 className='text-primary font-semibold'>{data.name}</h1>
                  <div className='flex justify-between items-center text-xl font-semibold'>
                    <Link to='/pricing'> ฿{data.price}</Link>
                    <Link to='/pricing'>Details</Link>
                  </div>
                </div>
                <p className='text-xl font-semibold absolute top-0 left-3'>
                  20Km
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className='grid place-items-center mt-8'>
          <Link to='/pricing'>
            <button data-aos='fade-up' className='button-outline'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarList;
