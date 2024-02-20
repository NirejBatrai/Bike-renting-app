import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    id: 1,
    title: "Home",
    link: "/#",
  },
  {
    id: 2,
    title: "About",
    link: "/#about",
  },
  {
    id: 3,
    title: "Contact",
    link: "/#contact",
  },
  {
    id: 4,
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl'>
      <section className='container'>
        <div className=' grid md:grid-cols-3 py-5'>
          {/* company Details */}
          <div className=' py-8 px-4 '>
            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif'>
              Bike Rental
            </h1>
            <p className='text-sm'>
              Welcome to Bike Rental! We provide premium bikes for your
              adventurous journey. Explore the world on two wheels with us.
            </p>
            <br />
            <div className='flex items-center gap-3'>
              <FaLocationArrow />
              <p>Phuket, Thailand</p>
            </div>
            <div className='flex items-center gap-3 mt-3'>
              <FaMobileAlt />
              <p>+66813480300</p>
            </div>
            {/* Social Handle */}
            <div className='flex items-center gap-3 mt-6'>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram className='text-3xl hover:text-primary duration-300' />
              </a>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook className='text-3xl hover:text-primary duration-300' />
              </a>
              <a
                href='https://www.linkedin.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin className='text-3xl hover:text-primary duration-300' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
