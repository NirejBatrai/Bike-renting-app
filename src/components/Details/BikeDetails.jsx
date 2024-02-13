import React from "react";
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function BikeDetails() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const imageSrc = params.get("imageSrc");
  const bikeName = params.get("bikeName");
  const description = params.get("description");

  const scaleIn = useSpring({
    transform: "scale(1)",
    from: { transform: "scale(0)" },
  });

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold mb-4'>Bike Details</h1>
      <div className='w-100 h-100 mb-20 overflow-hidden rounded-lg shadow-xl'>
        <animated.img
          style={scaleIn}
          src={imageSrc}
          alt={bikeName}
          className='w-full h-auto max-h-full'
        />
      </div>
      <h2 className='text-xl font-bold mb-2'>{bikeName}</h2>
      <p className='text-lg text-center'>{description}</p>
    </div>
  );
}
