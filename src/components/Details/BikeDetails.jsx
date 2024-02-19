import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./BikeDetails.css";
import BikeData from "../BikeData/BikeData"; // Importing bike data from BikeData.js

export default function BikeDetails() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const bikeName = params.get("bikeName");

  const [selectedBike, setSelectedBike] = useState(null);

  useEffect(() => {
    // Find the selected bike from BikeData based on bikeName
    const foundBike = BikeData.find((bike) => bike.bikeName === bikeName);
    setSelectedBike(foundBike);
  }, [bikeName]);

  const scaleIn = useSpring({
    transform: "scale(1)",
    from: { transform: "scale(0)" },
    config: { duration: 500 } 
  });

  if (!selectedBike) {
    return <div>Please....</div>;
  }

  const {
    imageSrc,
    description,
    price,
    cc,
    speed,
    seatHeight,
    wheelbase,
    engineType,
    cylinderArrangement,
    maxHorsepower,
    lubricationSystem,
    engineOilCapacity,
    fuelTankCapacity,
    steeringAngle,
    brakeFront,
    brakeBack,
    maxSpeed,
  } = selectedBike;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen BikeDetails-container'>
      <div className='booking-image mb-5'>
        <animated.img
          style={scaleIn}
          src={imageSrc}
          alt={bikeName}
          className='w-full h-full object-cover'
        />
      </div>
      <h2 className='font-bold text-lg text-gray-900 mb-2 '>{bikeName}</h2>
      <table className='table-auto max-w-s  ml-20 mr-20'>
        <tbody>
          <tr>
            <td className='border px-2 py-1'>Description</td>
            <td className='border px-2 py-1'>{description}</td>
          </tr>
          <tr>
            <td className='border px-2 py-1'>Price (฿)</td>
            <td className='border px-2 py-1'>{price}</td>
          </tr>
          <tr>
            <td className='border px-2 py-1'>Engine Displacement (cc)</td>
            <td className='border px-2 py-1'>{cc}</td>
          </tr>
          <tr>
            <td className='border px-2 py-1'>Speed (km/hr)</td>
            <td className='border px-2 py-1'>{speed}</td>
          </tr>
          <tr>
            <td className='border px-2 py-1'>Seat Height</td>
            <td className='border px-2 py-1'>{seatHeight}</td>
          </tr>
          <tr>
            <td className='border px-2 py-1'>Wheelbase</td>
            <td className='border px-2 py-1'>{wheelbase}</td>
          </tr>
          <tr>
            <td className='border px-2 py-1'>Engine Type</td>
            <td className='border px-2 py-1'>{engineType}</td>
          </tr>
          <tr>
            <td className='border px-2 py-1'>Cylinder Arrangement</td>
            <td className='border px-2 py-1'>{cylinderArrangement}</td>
          </tr>
          <tr>
            <td className='border px-2 py-1'>Maximum Horsepower</td>
            <td className='border px-2 py-1'>{maxHorsepower}</td>
          </tr>
          <tr>
            <td className='border px-2 py-1'>Lubrication System</td>
            <td className='border px-2 py-1'>{lubricationSystem}</td>
          </tr>
          <tr>
            <td className='border px-2 py-1'>Engine Oil Capacity</td>
            <td className='border px-2 py-1'>{engineOilCapacity}</td>
          </tr>
          <tr>
            <td className='border px-2 py-1'>Fuel Tank Capacity</td>
            <td className='border px-2 py-1'>{fuelTankCapacity}</td>
          </tr>
          <tr>
            <td className='border px-2 py-1'>Steering Angle</td>
            <td className='border px-2 py-1'>{steeringAngle}</td>
          </tr>
          <tr>
            <td className='border px-2 py-1'>Brake Front</td>
            <td className='border px-2 py-1'>{brakeFront}</td>
          </tr>
          <tr>
            <td className='border px-2 py-1'>Brake Back</td>
            <td className='border px-2 py-1'>{brakeBack}</td>
          </tr>
          <tr>
            <td className='border px-2 py-1'>Maximun Speed</td>
            <td className='border px-2 py-1'>{maxSpeed}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
