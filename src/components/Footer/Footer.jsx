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
              <a href='#'>
                <FaInstagram className='text-3xl hover:text-primary duration-300' />
              </a>
              <a href='#'>
                <FaFacebook className='text-3xl hover:text-primary duration-300' />
              </a>
              <a href='#'>
                <FaLinkedin className='text-3xl hover:text-primary duration-300' />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 '>
            <div className=''>
              <div className='py-8 px-4 '>
                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.id}
                      className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200'
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='py-8 px-4 '>
              <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                Links
              </h1>
              <ul className={`flex flex-col gap-3`}>
                {FooterLinks.map((link) => (
                  <li
                    key={link.id}
                    className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200'
                  >
                    <span>&#11162;</span>
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='py-8 px-4 '>
              <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                Location
              </h1>
              {/* <ul className="list-disc list-inside"> */}
              <ul className='flex flex-col gap-3'>
                {FooterLinks.map((link) => (
                  <li
                    key={link.id}
                    className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200'
                  >
                    <span>&#11162;</span>
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
