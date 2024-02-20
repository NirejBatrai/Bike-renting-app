/* eslint-disable react/prop-types */
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ bike, index }) {
  return (
    <div
      key={index}
      className="container border border-gray-300 p-4 rounded-md flex flex-col items-center card-container"
    >
      {/* Bike Image */}
      <div className="w-32 h-32 mb-4 overflow-hidden">
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
      <h2 className="text-xl font-bold text-center mb-2">{bike.bikeName}</h2>
      {/* Bike Price */}
      <p className="text-lg font-semibold">Price: ฿{bike.price}/Day</p>
      {/* Engine Displacement */}
      {/* <p className="text-sm">Engine Displacement: {bike.cc} cc</p> */}
      {/* Link to Bike Details */}

      <div className="pricing-btn-container">

        <Link
          to={{
            pathname: "/bike-details",
            search: `?imageSrc=${encodeURIComponent(
              bike.imageSrc
            )}&bikeName=${encodeURIComponent(
              bike.bikeName
            )}&description=${encodeURIComponent(bike.description)}`,
          }}
          className="pricing-btn"
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
          className="pricing-btn"
        >
          Select
        </Link>
      </div>

    </div>
  );
}
