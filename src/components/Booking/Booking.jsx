import React, { useState } from "react";
import axios from "axios";
import "./Book.css";
import { useSpring, animated } from "react-spring";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/bookings", formData);
      alert("Booking successful!");
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Booking failed. Please try again.");
    }
  };

  const scaleIn = useSpring({
    transform: "scale(1)",
    from: { transform: "scale(0)" },
  });

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const imageSrc = params.get("imageSrc");
  const bikeName = params.get("bikeName");
  const description = params.get("description");

  // Conditionally render the "Bike Details" section only if accessed through a link
  const isFromPricing = imageSrc && bikeName && description;

  return (
    <>
      {isFromPricing && (
        <div className='BikeDetails-container'>
          <h1>Bike Details</h1>
          <animated.img style={scaleIn} src={imageSrc} alt={bikeName} />
          <h2>{bikeName}</h2>
          <p>{description}</p>
        </div>
      )}
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <h1 className='text-4xl font-bold mb-4 text-center'>
          Motor Bike Booking
        </h1>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-6'>
            <div>
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='name'
              >
                Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white'
                id='name'
                name='name'
                type='text'
                placeholder='John Doe'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className='block text-gray-700 font-bold mb-2'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                id='email'
                name='email'
                type='email'
                placeholder='johndoe@example.com'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='date'
            >
              Date
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white'
              id='date'
              name='date'
              type='date'
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='time'
            >
              Time
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='time'
              name='time'
              type='time'
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='message'
              name='message'
              placeholder='Enter your message here...'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type='submit' className='button'>
              <span> Submit</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Booking;
