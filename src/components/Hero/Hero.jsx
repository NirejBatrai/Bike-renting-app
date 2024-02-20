import React, { useEffect } from "react";

import XADV from "../../assets/XADV.png";
import AOS from "aos";
import { Link } from "react-router-dom";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import BikeList from "../../components/BikeList/BikeList";
import Contact from "../../components/Contact/Contact";
// import Testimonial from "../../components/Testimonial/Testimonial";

const Hero = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className='dark:bg-black dark:text-white duration-300'>
      <div className='container min-h-[620px] flex'>
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
          <div
            data-aos='zoom-in'
            data-aos-duration='800'
            data-aos-once='false'
            className='order-1 sm:order-2'
          >
            <img
              src={XADV}
              alt=''
              className='sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]'
            />
          </div>
          <div className='space-y-5 order-2 sm:order-1 sm:pr-32 '>
            <p data-aos='fade-up' className='text-primary text-2xl font-serif'>
              Effortless
            </p>
            <h1
              data-aos='fade-up'
              data-aos-delay='500'
              className='text-5xl lg:text-7xl font-semibold font-serif'
            >
              Motor Bike Rental
            </h1>
            <p data-aos='fade-up' data-aos-delay='500'>
              Welcome to our bike rental service! Get ready to explore scenic
              routes with our top-quality bikes. Whether you're a seasoned rider
              or new to biking, we've got you covered. Let's make your biking
              experience unforgettable!
            </p>
            <Link to='/pricing'>
              {" "}
              <button
                data-aos='fade-up'
                data-aos-delay='500'
                onClick={() => {
                  AOS.refreshHard();
                }}
                className='rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black mt-7'
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <About /> */}
      <Services />
      <BikeList />
      {/* <Testimonial /> */}
      <Contact />
    </div>
  );
};

export default Hero;
