import React from "react";
import XADV from "../../assets/XADV.png";

const About = () => {
  return (
    <div className='dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
          <div data-aos='slide-right' data-aos-duration='1500'>
            <img
              src={XADV}
              alt=''
              className='sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]'
            />
          </div>
          <div>
            <div className='space-y-5 sm:p-16 pb-6'>
              <h1
                data-aos='fade-up'
                className='text-3xl sm:text-4xl font-bold font-serif'
              >
                About us
              </h1>
              <p data-aos='fade-down' className='leading-8 tracking-wide'>
                Welcome to Our Bike Rental Service! We're dedicated to making
                biking accessible and enjoyable for everyone. With top-quality
                bikes and personalized service, we aim to provide memorable
                experiences for riders of all levels. Whether you're a casual
                cyclist or an adventure seeker, join us as we pedal towards new
                horizons and unforgettable moments on the road!
              </p>
              <p data-aos='fade-up'>
                At Our Bike Rental Service, we believe that exploration is the
                essence of adventure. Our mission is to equip you with the tools
                and support you need to embark on thrilling journeys, discover
                new horizons, and create lasting memories. Join us as we pedal
                towards excitement, exploration, and the freedom of the open
                road!
              </p>
              <button data-aos='fade-down' className='button-outline'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
