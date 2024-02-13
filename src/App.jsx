import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import Services from "./components/Services/Services";
// import CarList from "./components/CarList/CarList";
// import Contact from "./components/Contact/Contact";
// import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Pricing from "./components/Pricing/Pricing";
import Booking from "./components/Booking/Booking";
import BikeDetails from "./components/Details/BikeDetails";
import About from "./components/About/About";

import BikeData from "./components/BikeData/BikeData";
const App = () => {
  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-black dark:text-white text-black overflow-x-hidden'>
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path='/' element={<Hero theme={theme} />} />
          {/* <About />
        <Services />
        <CarList />
        <Testimonial />
        <Contact />
        <Footer /> */}
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/booking' element={<Booking />} />
          <Route
            path='/bike-details'
            element={<BikeDetails BikeData={BikeData} />}
          />

          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
