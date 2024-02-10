import React, { useState } from "react";
import axios from "axios";
import "./Book.css";
import { useSpring, animated } from "react-spring";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const sendMail = () => {
    axios
      .get("http://localhost:5000/", {
        params: {
          name,
          email,
          date,
          time,
          message,
        },
      })
      .then(() => {
        console.log("succes");
      })
      .catch(() => {
        console.log("failure");
      });
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
        <form className='space-y-6'>
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
                placeholder='Your Name'
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setDate(e.target.value)}
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
              onChange={(e) => setTime(e.target.value)}
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
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div>
            <button type='submit' className='button' onClick={sendMail}>
              <span> Submit</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Booking;
