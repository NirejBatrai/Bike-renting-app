import React from "react";

const Contact = () => {
  return (
    <>
      <span id='contact'></span>
      <div data-aos='zoom-in' className='dark:bg-black dark:text-white py-14'>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-900 py-8 px-6 rounded-lg shadow-lg'>
            <div className='sm:col-span-1 space-y-3'>
              <h1 className='text-4xl sm:text-5xl font-bold text-white'>
                Let's Collaborate on Your Upcoming Bike Rental Venture
              </h1>
              <p className='text-gray-400'>
                Planning a road trip can be exhilarating, filled with
                anticipation and the promise of adventure around every bend.
                From the wind whispering through open windows to the endless
                possibilities of the open road, every journey becomes a story
                waiting to unfold.
              </p>
            </div>
            <div className='sm:col-span-1 flex items-center justify-center'>
              <button className='bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
