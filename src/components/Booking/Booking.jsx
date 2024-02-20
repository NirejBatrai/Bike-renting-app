import { useState } from "react";
import "./Booking.css";
import { useSpring, animated } from "react-spring";
import { useLocation, useNavigate  } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Booking = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [phone, setPhone] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState("pickup");

  const navigate = useNavigate();


  function sendMail() {

    const templateParams = {
      name,
      email,
      date,
      time,
      message,
      bikeName,
      description,
      imageSrc,
      phone,
      deliveryOption,
    }
  
    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with actual values
   emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLET_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }
  

  const scaleIn = useSpring({
    transform: "scale(1)",
    from: { transform: "scale(0)" },
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    sendMail(); // Call the sendMail function to handle the form submission
    setShowPopup(true); // Show the popup after form submission
  };

  const handleDeliveryOptionChange = (option) => {
    setDeliveryOption(option);
  };


  const handlePopupClosed = () =>{
    setShowPopup(false);
    navigate('/pricing');
  };

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const imageSrc = params.get("imageSrc");
  const bikeName = params.get("bikeName");
  const description = params.get("description");

  // Conditionally render the "Bike Details" section only if accessed through a link
  const isFromPricing = imageSrc && bikeName && description;

  return (
    <div className="booking-container">
      {isFromPricing && (
        <div className="BikeDetails-container">
          <animated.img
            style={scaleIn}
            src={imageSrc}
            alt={bikeName}
            className="booking-image"
          />
          <h2>{bikeName}</h2>
          <p>{description}</p>
        </div>
      )}
      <div className="p-8 rounded-lg shadow-md middle-container">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Motor Bike Booking
        </h1>
        <form className="form-container" onSubmit={(e) => handleSubmit(e)}>

          <div className="flex items-center justify-center bg-gray-200 py-2">

            <div className="flex itmes-center mx-5">
              <input
                type="radio"
                id="pickup"
                name="deliveryOption"
                value="Pick up"
                checked
                onChange={() => handleDeliveryOptionChange("Pick up")}
              />
              <label className="ml-1" htmlFor="deliver">Pick up</label>
            </div>

            <div className="flex items-center mx-5">
              <input
                type="radio"
                id="deliver"
                name="deliveryOption"
                value="Deliver"
                onChange={() => handleDeliveryOptionChange("Deliver")}
              />
              <label className="ml-1" htmlFor="deliver">Deliver</label>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="date"
              name="date"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="time"
            >
              Time
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="time"
              name="time"
              type="time"
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="message"
              name="message"
              rows={5}
              placeholder="Enter your message here..."
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="booking-btn-container">
            <button type="submit" className="button booking-btn">
              <span> Submit</span>
            </button>
          </div>
        </form>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-4 text-green-500">
                Thank You for Booking! 😃
              </h2>
              <p className="text-gray-700 mb-4">
                We will contact you shortly to confirm your booking details.{" "}
                <span role="img" aria-label="praying-hands">
                  🙏
                </span>
              </p>
              <button
                className='bg-green-500 text-white py-2 px-4 rounded focus:outline-none focus:bg-green-600'
                onClick={() => handlePopupClosed()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
