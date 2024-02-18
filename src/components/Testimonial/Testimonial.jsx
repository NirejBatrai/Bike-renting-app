import React from "react";

import khem from "../../assets/khem.jpg";
import yasu from "../../assets/yasuImage.png";

const testimonialData = [
  {
    name: "Khem Khanal",
    image: { khem },
    description:
      "Effortless bike rental process, top-notch bikes, and friendly service made our exploration a joy.",
    aosDelay: "0",
  },
  {
    name: "Yasu",
    image: { yasu },
    description:
      "From start to finish, renting bikes here was a breeze, enhancing our trip with smooth rides and scenic views.",
    aosDelay: "300",
  },
  {
    name: "Nirmal",
    image: "",
    description:
      "Outstanding bike rental experience, seamless service, and quality bikes made our adventure unforgettable.",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id='about'></span>
      <div className='dark:bg-black dark:text-white py-14 sm:pb-24'>
        <div className='container'>
          {/* Header */}
          <div className='space-y-4 pb-12'>
            <p
              data-aos='fade-up'
              className='text-3xl font-semibold text-center sm:text-4xl font-serif'
            >
              What Our Clients Say About Us
            </p>
            <p data-aos='fade-up' className='text-center sm:px-44'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis iure consectetur tempora amet.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white'>
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos='fade-up'
                data-aos-delay={skill.aosDelay}
                className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg '
              >
                <div className='grid place-items-center '>
                  <img src={khem} alt='' className='rounded-full w-20 h-20' />
                </div>
                <div className='text-2xl'>⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className='text-center font-semibold'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
