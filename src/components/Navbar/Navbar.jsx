import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/about",
  },
  {
    id: 3,
    name: "BOOKING",
    link: "/pricing",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300'>
      <div className='container py-2 md:py-0'>
        <div className='flex justify-between items-center'>
          <Link to={"/"}>
            <span className='text-3xl font-bold font-serif'>Bike Rental</span>
          </Link>
          <nav className='hidden md:block'>
            <ul className='flex items-center gap-8'>
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className='py-4'>
                  <Link
                    to={link}
                    className=' text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500'
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className='flex items-center gap-4 md:hidden '>
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=' cursor-pointer transition-all'
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className='cursor-pointer transition-all'
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
