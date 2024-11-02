"use client";
import { useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Umrah from "./components/Umrah";
import Testimonials from "./components/Testimonials";
import Hajj from "./components/Hajj";
import Gallery from "./components/Gallery";



export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const phoneNumber = "+92 333 8204949"; // Replace with your number

  const handleClick = () => {
    // Open dialer on button click
    window.open(`https://wa.me/+923338204949`, '_blank');
    
  };

  return (
    <div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        `}
      </style>
      <Navbar />
      <Hero />
      <Hajj/>
      <Umrah/>
    
      <Gallery/>
      <Testimonials/>
      <Contact />
      
      <div className="z-30 fixed bottom-10 right-4 flex items-center">
        <button
          type="button"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          className="mb-2 inline-block rounded-full bg-green-600 p-3 font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          onClick={handleClick}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <span className="text-4xl">
            <RiWhatsappFill />
          </span>
        </button>

        {isOpen && (
          <div className="absolute right-full w-48 bottom-0 bg-white text-black p-4 rounded shadow-lg mr-4">
            <p className="text-sm  font-semibold">Let&apos;s Chat:</p>
            <p className="text-sm ">{phoneNumber}</p>
          </div>
        )}
      </div>
    </div>
  );
}

